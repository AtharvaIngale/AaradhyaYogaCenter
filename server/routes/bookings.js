import { Router } from "express";
import Booking from "../models/Booking.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

export default router;
