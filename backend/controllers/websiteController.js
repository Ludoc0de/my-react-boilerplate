// asyncHandler to use errorHandler and avoid try/catch
const asyncHandler = require("express-async-handler");
const Website = require("../models/websiteModel");

// Get website
// Route GET /api/web
// Aces Public
const getWebsite = asyncHandler(async (req, res) => {
  const websites = await Website.find();

  res.status(200).json(websites);
});

// Post website
// Route Post /api/web
// Aces Private
const postWebsite = asyncHandler(async (req, res) => {
  const websites = await Website.create({
    text: req.body.text,
  });
  res.status(200).json(websites);
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

  await website.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getWebsite,
  postWebsite,
  updateWebsite,
  deleteWebsite,
};
