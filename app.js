import express, { urlencoded } from "express";
import { config } from "dotenv";
import { dbConnection } from "./config/database.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";
import cors from "cors";

const app = express();
config({
  path: "./config/config.env",
});

// Database connection
dbConnection();

// Using middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);
app.use(cors());
app.use("/api/v2", userRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
