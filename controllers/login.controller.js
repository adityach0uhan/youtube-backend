import userModel from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
const loginController = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const userdetails = await userModel.findOne({ email });
      const verified = await bcryptjs.compare(password, userdetails.password);
      
      if (!verified) {
            return res.status(401).send("Wrong Credentials");
      }
    //   jwt.sign(userdetails)
      const JWTtoken=jwt.sign({id:userdetails._id}, process.env.JWT_SECRET);
      
      res.cookie(
          "access_token", JWTtoken, {
             httpOnly:true
         }
      ).status(200).json({
         message:"cookie set"
     })


  } catch (error) {
    console.log(error);
  }
};
export default loginController;
