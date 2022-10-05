import express from "express";
import UserModel from "../models/User.js";
const router = express.Router();

router.post("/add", async (req, res) => {
  const list = req.body.title;
  console.log("herro");
});

export default router;
