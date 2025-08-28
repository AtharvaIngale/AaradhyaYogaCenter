import { Router } from "express";
import Inquiry from "../models/Inquiry.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json(inquiry);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

export default router;

