import mongoose from "mongoose";

const memorySchema = new mongoose.Schema({
  nam: String,
  time: String,
  memory: String,
  createdAt: { type: Date, default: Date.now },
});

const Memory = mongoose.model("Memory", memorySchema);

export default Memory;
