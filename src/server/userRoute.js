import express from "express";
import { createUser } from "./user/createUser.js";

const router = express.Router();

router.post("/createUser", createUser);

// router.post("login", loginUser);

export default router;
