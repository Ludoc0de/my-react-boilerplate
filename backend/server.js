const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const websiteRoutes = require("./routes/websiteRoutes");
const app = express();

//set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set Routes
app.use("/api/web", websiteRoutes);

//to overwrite default express error
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on ${process.env.PORT}!`)
);
