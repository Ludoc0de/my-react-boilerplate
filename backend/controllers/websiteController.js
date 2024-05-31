// asyncHandler to use errorHandler and avoid try/catch
const asyncHandler = require("express-async-handler");

// Get website
// Route GET /api/web
// Aces Public
const getWebsite = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get web!!!" });
});

// Post website
// Route Post /api/web
// Aces Private
const postWebsite = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get web!!!" });
});

// Update website
// Route Put /api/web/:id
// Aces Private
const updateWebsite = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update web ${req.params.id}` });
});

// Delete website
// Route Delete /api/web/:id
// Aces Private
const deleteWebsite = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `del web ${req.params.id}` });
});

module.exports = {
  getWebsite,
  postWebsite,
  updateWebsite,
  deleteWebsite,
};
