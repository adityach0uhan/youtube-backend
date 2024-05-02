export const userInfo = (req, res) => {
  const requestBody = req.body;
  console.log("get User route ");
};

export const updateUser = (req, res, next) => {
  res.send("updateUser user");
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