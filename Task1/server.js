const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/task1db")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Task 1 REST API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});