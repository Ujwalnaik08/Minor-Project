const ErrorHander=require("../utils/errorhander");
const catchAsyncErrors=require("../middleware/catchSyncErrors");
const User = require("../models/userModel");

//Register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
  
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "this is a simple id",
        url: "profileUrl",
      },
    });
  
    res.status(201).json({
        success: true,
        user,
    });
  });