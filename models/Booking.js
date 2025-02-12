import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  price: { type: Number, required: true },
});

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
