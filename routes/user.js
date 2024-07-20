import express from "express";
import {
  register,
  verify,
  login,
  logout,
  addTask,
  removeTask,
  updateTask,
  getMyProfile,
  updateProfile,
  updatePassword,
  forgotPassword,
  resetPassword,
} from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const app = express.Router();

app.post("/register", register);
app.post("/verify", isAuthenticated, verify);
app.post("/login", login);
app.get("/logout", logout);

app.post("/newtask", isAuthenticated, addTask);
app.delete("/deletetask/:taskId", isAuthenticated, removeTask);
app.put("/updatetask/:taskId", isAuthenticated, updateTask);
app.get("/me", isAuthenticated, getMyProfile);

app.put("/updateprofile", isAuthenticated, updateProfile);
app.put("/updatepassword", isAuthenticated, updatePassword);
app.post("/forgotpassword", forgotPassword);
app.put("/resetpassword", resetPassword);

export default app;
