const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const coursesRoutes = require("./routes/coursesRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/courses", coursesRoutes);

// Health check route
app.get("/", (req, res) => res.send("Backend is running!"));

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });

// Export app for Vercel
module.exports = app;
