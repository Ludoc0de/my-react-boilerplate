// Get website
// Route GET /api/web
// Aces Public
const getWebsite = (req, res) => {
  res.status(200).json({ message: "Get web!!!" });
};

// Post website
// Route Post /api/web
// Aces Private
const postWebsite = (req, res) => {
  res.status(200).json({ message: "Get web!!!" });
};

// Update website
// Route Put /api/web/:id
// Aces Private
const updateWebsite = (req, res) => {
  res.status(200).json({ message: `update web ${req.params.id}` });
};

// Delete website
// Route Delete /api/web/:id
// Aces Private
const deleteWebsite = (req, res) => {
  res.status(200).json({ message: `del web ${req.params.id}` });
};

module.exports = {
  getWebsite,
  postWebsite,
  updateWebsite,
  deleteWebsite,
};
