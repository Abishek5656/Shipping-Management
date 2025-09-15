import mongoose from "mongoose";

const shipSchema = new mongoose.Schema({
  name: {
    type: String,
    index:true,
    lower:true,
    unique:true,
    required: [true, "Ship name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/.+\@.+\..+/, "Please provide a valid email"],
  },
  shipType: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Ship", shipSchema);
