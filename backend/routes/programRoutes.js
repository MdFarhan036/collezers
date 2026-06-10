import express from "express";
// import {
//     addProgram,
//     updateProgram,
//     deleteProgram,
//     getProgramsByUniversity,
// } from "../controllers/adminProgramController.js";

import { protect } from "../middleware/authMiddleware.js";
import pool from "../config/db.js";

const router = express.Router();

router.use(protect);

router.post("/admin/programs", async(req, res) => {
    try {
        const {
            name,
            slug,
            degree,
            duration,
            mode,
            description,
            is_active,
        } = req.body;

        await pool.execute(
            `INSERT INTO programs 
       (name, slug, degree, duration, mode, description, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?)`, [
                name,
                slug,
                degree,
                duration,
                mode,
                description,
                is_active ? 1 : 0,
            ]
        );

        res.json({ message: "Program added successfully" });

    } catch (err) {

        console.error("DB ERROR:", err);

        if (err.code === "ER_DUP_ENTRY") {
            return res.status(400).json({ message: "Slug already exists" });
        }

        res.status(500).json({ message: "Server error" });
    }
});
router.get("/admin/programs", async(req, res) => {
    try {
        const [rows] = await pool.execute(`
      SELECT * FROM programs
      ORDER BY created_at DESC
    `);

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
router.get("/admin/programs", async(req, res) => {
    try {
        const [rows] = await pool.execute(`
      SELECT * FROM programs
      ORDER BY created_at DESC
    `);

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
// router.get("/programs/:universityId", getProgramsByUniversity);
// router.put("/programs/:id", updateProgram);
// router.delete("/programs/:id", deleteProgram);

export default router;