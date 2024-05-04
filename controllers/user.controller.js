import userModel from "../models/User.model.js";

export const userInfo = (req, res) => {
  const requestBody = req.body;
  console.log("get User route ");
};

// update user controller
export const updateUser = async (req, res, next) => {
  if (req.params.id == req.user.id) {
    try {
      const updated = await userModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updated);
    } catch (error) {
      next("Database Error", 400, "Bad request");
    }
  } else {
    return next("Authentication", 403, "Unauthorized access");
  }
};

export const getUser = (req, res, next) => {
  res.send("getuser user");
};

export const deleteUser = (req, res, next) => {
  res.send("delet user");
};

export const subscribe = (req, res, next) => {
  res.send("subscribe user");
};

export const unsubscribe = (req, res, next) => {
  res.send("unsubscribe user");
};

export const liked = (req, res, next) => {
  res.send("like ");
};

export const disliked = (req, res, next) => {
  res.send("dislike ");
};
