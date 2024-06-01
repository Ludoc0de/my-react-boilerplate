//hash password
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// asyncHandler to use errorHandler and avoid try/catch
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Post create user
// Route POST /api/users
// Aces Public
const createUser = asyncHandler(async (req, res) => {
  //!user not complet all input
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add your email & password");
  }

  //if user already create
  const userCreated = await User.findOne({ email });
  if (userCreated) {
    res.status(400);
    throw new Error("User already create");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  //check if user created
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      // token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Post user
// Route Post /api/users/login
// Aces public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Check user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      // token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Get user
// Route GET /api/users/me
// Aces Public
const getUser = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

// Update user
// Route Put /api/users/:id
// Aces Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("user was not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

// Delete user
// Route Delete /api/users/:id
// Aces Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("user was not found");
  }

  await user.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
};
