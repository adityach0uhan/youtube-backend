const userController = (req, res) => {
  const requestBody = req.body;
  res.send("User Route , This response is from User Controller");
  console.log("User Controller ");
};

export default userController


