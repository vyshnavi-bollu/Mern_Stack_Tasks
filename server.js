const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Import auth routes
const authRoutes = require("./routes/auth");

// Middleware
app.use(cors());
app.use(express.json());

// Use auth routes
app.use("/api/auth", authRoutes);

// Check file is running
console.log("Testing new server.js file");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    // Start Server only after MongoDB connection
    app.listen(process.env.PORT || 5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch((err) => {
    console.log("MongoDB Error:", err.message);
});