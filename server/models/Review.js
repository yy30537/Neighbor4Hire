// server/models/Review.js
const reviewSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reviewedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String,
    visibilityStatus: { type: String, enum: ['hidden', 'visible'], default: 'hidden' },
    createdAt: { type: Date, default: Date.now }
});