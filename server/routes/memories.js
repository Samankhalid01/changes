import express from "express";
import Memory from "../models/memory.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const { nam, time, memory } = req.body;
    
    const newMemory = await Memory.create({ name: nam, time, memoryText: memory });
    
    res.status(201).json(newMemory);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const memories = await Memory.find({});
    console.log("Memories:", memories);
    res.json(memories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedMemory = await Memory.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedMemory) {
      return res.status(404).json({ message: "Memory not found" });
    }
    res.json(updatedMemory);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedMemory = await Memory.findByIdAndDelete(req.params.id);
    if (!deletedMemory) {
      return res.status(404).json({ message: "Memory not found" });
    }
    res.json({ message: "Memory deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
