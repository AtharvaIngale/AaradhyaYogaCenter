import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    classId: { type: String, required: true },
    preferredDate: { type: Date, required: true },
    notes: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
