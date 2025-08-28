import { Router } from "express";

const router = Router();

// Sample classes (replace with a Mongoose model if needed)
const classes = [
  { id: "hatha", name: "Hatha Yoga", level: "Beginner", duration: 60, days: ["Mon", "Wed", "Fri"], price: 2999 },
  { id: "vinyasa", name: "Vinyasa Flow", level: "Intermediate", duration: 60, days: ["Tue", "Thu"], price: 3299 },
  { id: "yin", name: "Yin Yoga", level: "All Levels", duration: 45, days: ["Sat"], price: 2499 },
  { id: "prenatal", name: "Prenatal Yoga", level: "Gentle", duration: 45, days: ["Sun"], price: 2799 }
];

router.get("/", (req, res) => res.json(classes));

export default router;
