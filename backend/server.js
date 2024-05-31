const express = require("express");
const dotenv = require("dotenv").config();
const websiteRoutes = require("./routes/websiteRoutes");
const app = express();

//Set Routes
app.use("/api/web", websiteRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on ${process.env.PORT}!`)
);
