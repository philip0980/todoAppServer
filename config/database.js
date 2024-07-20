import mongoose from "mongoose";
import { config } from "dotenv";

config({
  path: "./config/config.env",
});

const dbConnection = () => {
  mongoose
    .connect(process.env.Database_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

export { dbConnection };
