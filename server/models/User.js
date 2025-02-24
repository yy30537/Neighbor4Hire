// server/models/User.js
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['seeker', 'provider'], required: true },
  profile: {
    name: String,
    bio: String,
    location: String,
    skills: [String], // For providers
    rating: { type: Number, default: 0 },
    verificationStatus: { type: String, enum: ['pending', 'verified'], default: 'pending' }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Add password hashing to User model
const bcrypt = require('bcryptjs');

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12); // 12 rounds of salting
  }
  next();
});