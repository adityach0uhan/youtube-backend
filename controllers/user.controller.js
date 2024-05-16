import userModel from "../models/User.model.js";

export const userInfo =async (req, res) => {
 try {
    const user = await userModel.findById(req.params.id);

    if (user) {
      return res.status(200).json(user)
    }
    res.send("No User Found")
  } catch (error) {
    res.send(error.message)
  }};

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
    return next(
      "Authentication",
      403,
      "Unauthorized access you can update only your account"
    );
  }
};

export const getUser =async (req, res, next) => {

  try {
    const user = await userModel.findById(req.params.id);

    if (user) {
      return res.status(200).json(user)
    }
    res.send("No User Found")
  } catch (error) {
    res.send(error.message)
  }

};

export const getComments = async(req, res, next) => {

  const comments = await userModel.findById(req.params.VideoId);
  console.log(comments)

};

export const deleteUser = async (req, res, next) => {
  if (req.params.id == req.user.id) {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      res.status(200).json("user deleted successfully");
    } catch (error) {
      next("Database Error", 400, "Bad request");
    }
  } else {
    return next(
      "Authentication",
      403,
      "Unauthorized access you can delete only your account"
    );
  }
};

export const subscribe = async (req, res, next) => {
  try {
  await userModel.findByIdAndUpdate(req.user.id, {
    $push: { subscribedChannels: req.params.id },
  });
    await userModel.findByIdAndUpdate(req.params.id, {
      $inc: { subcribers :1},
    });

    res.send("Subscribed Successfully")
  } catch (error) {
    res.send(error)
  }
};

export const unsubscribe = async (req, res, next) => {
 try {
  await userModel.findByIdAndUpdate(req.user.id, {
    $pull: { subscribedChannels: req.params.id },
  });
    await userModel.findByIdAndUpdate(req.params.id, {
      $inc: { subcribers :-1},
    });

    res.send("Subscribed Successfully")
  } catch (error) {
    res.send(error)
  }
};

export const liked = async (req, res, next) => {
  try {
  } catch (error) {}
};

export const disliked = async (req, res, next) => {
  try {
  } catch (error) {}
};