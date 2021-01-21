import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc   Fetch all users
// @route  Get /api/users
// @access Public
const getUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

// @desc    Fetch single user
// @route   get /api/users/:id
// @access  Public
const getUserById = expressAsyncHandler(async (req, res) => {
  const user = await Product.findById(req.params.id);

  if (user) {
    res.json(product);
  } else {
    req.statusCode(404);
    throw new Error("use not found");
  }
});

// @desc   Get user profile
// @route  POST /api/users/profile
// @access Private
const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.send();
})

export { authUser, getUsers, getUserById, getUserProfile };
