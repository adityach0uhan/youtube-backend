import userModel from "../models/User.model.js";
const signupController = async (req, res) => {
  try {
    const { username, email, password } = await req.body;
    await userModel.create({
      username,
      email,
      password,
    });
    res.send(req.body);
  } catch (error) {
    console.log("Error in Signup Controller",error);
  }
};

export default signupController;
