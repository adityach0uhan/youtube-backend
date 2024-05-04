import userModel from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const loginController = async (req, res) => {
  try {
    const { email, userpassword } = await req.body;
    const userdetails = await userModel.findOne({ email });
    const verified = await bcryptjs.compare(userpassword,userdetails.password);
    if (!verified) {
      return res.status(401).send("Wrong Credentials");
    }
    const JWTtoken = await jwt.sign({ id: userdetails._id },process.env.JWT_SECRET);
    const { password, ...otherDetails } = userdetails._doc;
    res
      .cookie("token", JWTtoken, {
        httpOnly: true,
      })
      .status(200)
      .json({
        message: otherDetails,
      });
  } catch (error) {
    console.log(error);
  }
};
export default loginController;
