// server/models/Job.js
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  priceModel: { type: String, enum: ['hourly', 'fixed'], required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ['open', 'booked', 'completed'], default: 'open' },
  timeSlots: [Date], // Available time slots
  seeker: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assigned on booking
  createdAt: { type: Date, default: Date.now }
});