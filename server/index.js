import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API route
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// ider chala rhi hun  server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
