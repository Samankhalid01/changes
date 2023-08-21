import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API route
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

dotenv.config();

export const connection = async () => {
  try {
    const conc = await mongoose.connect("paste your db conection url in doublecoats here", {
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
