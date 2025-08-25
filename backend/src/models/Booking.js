import mongoose from 'mongoose';

// Address sub-schema with validation
const addressSchema = new mongoose.Schema({
  label: { type: String, trim: true },
  line1: { type: String, required: [true, 'Address Line 1 is required'], trim: true },
  line2: { type: String, trim: true },
  city: { type: String, required: [true, 'City is required'], trim: true },
  state: { type: String, required: [true, 'State is required'], trim: true },
  pincode: { 
    type: String, 
    required: [true, 'Pincode is required'], 
    match: [/^\d{6}$/, 'Please enter a valid 6-digit pincode'] 
  }
}, { _id: false });

const bookingSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: [true, 'User reference is required'] 
    },
    service: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Service', 
      required: [true, 'Service reference is required'] 
    },
    slot: { 
      type: Date, 
      required: [true, 'Booking slot (date/time) is required'],
      validate: {
        validator: function(value) {
          return value && value > new Date();
        },
        message: 'Booking slot must be a future date/time'
      }
    },
    address: { 
      type: addressSchema, 
      required: [true, 'Address is required'] 
    },
    status: { 
      type: String, 
      enum: {
        values: ['requested', 'confirmed', 'completed', 'cancelled'],
        message: 'Status must be one of: requested, confirmed, completed, cancelled'
      }, 
      default: 'requested' 
    },
    notes: { 
      type: String, 
      trim: true,
      maxlength: [1000, 'Notes cannot exceed 1000 characters']
    }
  },
  { timestamps: true }
);

export default mongoose.model('Booking', bookingSchema);