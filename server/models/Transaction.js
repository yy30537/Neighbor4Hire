// server/models/Transaction.js
const transactionSchema = new mongoose.Schema({
    booking: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Booking', 
      required: true 
    },
    amount: { type: Number, required: true },
    status: { 
      type: String, 
      enum: ['pending', 'completed', 'disputed', 'refunded'],
      default: 'pending'
    },
    disputeReason: String,
    createdAt: { type: Date, default: Date.now }
});