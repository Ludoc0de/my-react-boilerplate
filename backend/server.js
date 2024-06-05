const express = require("express");
const colors = require("colors");
const websiteRoutes = require("./routes/websiteRoutes");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/database");

//Connect to Mongo with Mongoose
connectDB();

const app = express();

//set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware for handling CORS POLICY
app.use(cors());

//Set Routes
app.use("/api/web", websiteRoutes);
app.use("/api/users", userRoutes);

//to overwrite default express error
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on ${process.env.PORT}!`)
);
