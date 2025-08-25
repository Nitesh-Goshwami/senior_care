import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  duration: { type: Number }, // in minutes
}, { timestamps: true });

export default mongoose.model('Service', serviceSchema);
