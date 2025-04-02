import express from "express";
import { createUser } from "../user/createUser.js";
import { hashingPassword } from "../middleware/hashing_pw.js";
import { LoginUser } from "../user/loginUser.js";

const router = express.Router();

// 유저생성 (회원가입) API
router.post("/createUser", hashingPassword, createUser);

router.post("/loginUser", LoginUser);

// router.post("login", loginUser);

export default router;
