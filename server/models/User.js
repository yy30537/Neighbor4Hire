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

// Add pre-save hook for password hashing (bcryptjs)