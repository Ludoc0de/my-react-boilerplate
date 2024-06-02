// asyncHandler to use errorHandler and avoid try/catch
const asyncHandler = require("express-async-handler");
const Website = require("../models/websiteModel");

// Get website
// Route GET /api/web
// Aces Public
const getWebsite = asyncHandler(async (req, res) => {
  const website = await Website.find({ user: req.user.id });

  res.status(200).json(website);
});

// Post website
// Route Post /api/web
// Aces Private
const postWebsite = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  const website = await Website.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(website);
});

// Update website
// Route Put /api/web/:id
// Aces Private
const updateWebsite = asyncHandler(async (req, res) => {
  const website = await Website.findById(req.params.id);
  if (!website) {
    res.status(400);
    throw new Error("website was not found");
  }

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the profile user
  if (website.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedWebsite = await Website.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedWebsite);
});

// Delete website
// Route Delete /api/web/:id
// Aces Private
const deleteWebsite = asyncHandler(async (req, res) => {
  const website = await Website.findById(req.params.id);
  if (!website) {
    res.status(400);
    throw new Error("website was not found");
  }

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the profile user
  if (website.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await website.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getWebsite,
  postWebsite,
  updateWebsite,
  deleteWebsite,
};
