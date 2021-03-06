import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  year: {
    required: true,
    type: String
  },
  make: {
    required: true,
    type: String
  },
  model: {
    required: true,
    type: String
  },
});

export default mongoose.model("Vehicle", vehicleSchema);
