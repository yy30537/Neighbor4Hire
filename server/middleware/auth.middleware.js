// server/middleware/auth.middleware.js
const { verifyToken } = require('../utils/jwt.util');
const User = require('../models/User');

const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = verifyToken(token);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) return res.status(401).json({ error: 'Invalid token' });
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token verification failed' });
    }
};

const checkRole = (role) => (req, res, next) => {
    if (req.user.role !== role) {
        return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
};

module.exports = { protect, checkRole };