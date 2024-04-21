import userModel from "../models/User.model.js";
import bcryptjs from "bcryptjs";

const signupController = async (req, res) => {
  try {
    const { username, email, password } = await req.body;
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword =  bcryptjs.hashSync(password, salt);

    await userModel.create({
      username,
      email,
      password:hashedPassword,
    });
    res.send(req.body);
  } catch (error) {
    console.log("Error in Signup Controller", error);
  }
};

export default signupController;
