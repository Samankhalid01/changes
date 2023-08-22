import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import memoriesRoutes from "./routes/memories"; 


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:5174/memoriesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(error => {
    console.error("Error connecting to MongoDB:", error);
});

// API route to get memories
app.get("/api/memories", async (req, res) => {
    try {
        const memories = await Memory.find();
        res.json(memories);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Use the memoriesRoutes
app.use("/api/memories", memoriesRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
