
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const session = require("./config/session");
const cors = require("cors");


const app = express();
connectDB();


app.use(cors({
    origin: "http://localhost:5173", // Allow only frontend
    credentials: true, // Allow cookies & headers
  }));
app.use(express.json());
app.use(session);

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
