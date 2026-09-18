import express from "express";

const router = express.Router();

// Health check
router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Trip Planner API is running",
    });
});

export default router;