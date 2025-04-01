import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import db from "./db.js";
import userRouter from "./router/userRoute.js";

const app = express();
const PORT = 5000;

// __filename 및 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static파일의 경로
app.use(express.static(path.join(__dirname, "../../dist")));

// Cors URL
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credential: true,
  })
);

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("Request Haeders :", req.headers);
  console.log("Request Body :", req.body);
  next();
});

// Router
app.use("/user", userRouter);

// API Check
app.get("/api", (req, res) => {
  res.json({ message: "Hello Express" });
});

// DB Connect Check
db.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결에 실패했습니다.", err.stack);
    return;
  }
  console.log("데이터베이스 연결에 성공헸습니다.");
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 작동중...`);
});
