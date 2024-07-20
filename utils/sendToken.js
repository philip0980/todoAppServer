export const sendToken = (res, user, statuscode, message) => {
  const token = user.getJWTToken();

  const options = {
    HttpOnly: true,
    Secure: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
  };

  const UserData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    tasks: user.tasks,
    verified: user.verified,
  };
  res
    .status(statuscode)
    .cookie("token", token, options)
    .json({ success: true, message, user: UserData });
};
