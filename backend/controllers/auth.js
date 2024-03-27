import asyncHandler from "../middlewares/async.js";
import User from "./../models/auth.js"

export const register = asyncHandler(async (req, res, next) => {
   const { name, email, password, role, gender } = req.body;

   const user = await User.create({ name, email, password, role, gender })

   sendTokenResponse(user, 200, res)
})

export const login = asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email }).select('+password');

   if (!user) return res.status(401).json({ success: false, message: `User not found with email ${email}` });

   const isMatch = await user.matchPassword(password);

   if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid password' });

   sendTokenResponse(user, 200, res);
})

const sendTokenResponse = (user, status, res) => {

   const token = user.getJWTWebToken();

   return res.status(status).json({ success: true, token });
}

export const getAllUsers = asyncHandler(async (req, res, next) => {

   const users = await User.find({});

   if (!users) return res.status(401).json({ success: false, message: "User data list is not found" });

   res.status(200).json({ success: true, users })
})

export const getCurrentUser = asyncHandler(async (req, res, next) => {
   const user = await User.findById(req.user.id)

   if (!user) return res.status(401).json({ success: false, message: "Id is not found" });

   res.status(200).json({ success: true, user })
})

export const getSingleUser = asyncHandler(async (req, res, next) => {
   console.log('getSingleUser Pg')
   res.status(200).json({ success: true, message: "Register Pg" })
})

export const editUser = asyncHandler(async (req, res, next) => {
   console.log('editUser Pg')
   res.status(200).json({ success: true, message: "Register Pg" })
})

export const deleteUser = asyncHandler(async (req, res, next) => {
   console.log('deleteUser Pg')
   res.status(200).json({ success: true, message: "Register Pg" })
})