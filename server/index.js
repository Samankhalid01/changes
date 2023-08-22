import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API route
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

export const connection = async () => {
  try {
    const conc = await mongoose.connect("mongodb://localhost:27017/memories", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("<--- Connection Establised Successfully --->");
  } catch (error) {
    console.log("Error ", error.message);
  }
};

connection();
// ider chala rhi hun  server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${5000}`);
});
