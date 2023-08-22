import express from "express";
import Memory from "../models/memory";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newMemory = new Memory({ title, description });
    await newMemory.save();
    res.status(201).json(newMemory);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const memories = await Memory.find();
    res.json(memories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Read a single memory by ID
router.get("/:id", async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);
    if (!memory) {
      return res.status(404).json({ message: "Memory not found" });
    }
    res.json(memory);
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
