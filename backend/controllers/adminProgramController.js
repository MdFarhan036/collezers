// controllers/admin.program.controller.js

import db from "../db.js";
/* ===================== ADD PROGRAM ===================== */
export const addProgram = async(req, res) => {
    try {
        const { university_id, name, fees, utmlink } = req.body;

        if (!university_id || !name) {
            return res.status(400).json({
                message: "university_id and program name are required",
            });
        }

        const [result] = await db.query(
            `INSERT INTO university_programs (university_id, name, fees, utmlink)
       VALUES (?, ?, ?, ?)`, [university_id, name, fees || null, utmlink || null]
        );

        res.json({
            message: "Program added successfully",
            program_id: result.insertId,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add program" });
    }
};

/* ===================== GET ALL PROGRAMS ===================== */
/* Used for dropdowns (Specialization / Fees pages) */
export const getAllPrograms = async(req, res) => {
    try {
        const [rows] = await db.query(
            `SELECT 
        up.id,
        up.name,
        up.university_id,
        u.university
       FROM university_programs up
       JOIN universities u ON u.id = up.university_id
       ORDER BY u.university, up.name`
        );

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch programs" });
    }
};

/* ===================== GET PROGRAMS BY UNIVERSITY ===================== */
/* University → Program */
export const getProgramsByUniversity = async(req, res) => {
    try {
        const { universityId } = req.params;

        const [rows] = await db.query(
            `SELECT id, university_id, name, fees, utmlink
       FROM university_programs
       WHERE university_id = ?
       ORDER BY name`, [universityId]
        );

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch programs" });
    }
};

/* ===================== GET SINGLE PROGRAM ===================== */
/* Edit Program page */
export const getSingleProgram = async(req, res) => {
    try {
        const { id } = req.params;

        const [
            [program]
        ] = await db.query(
            `SELECT id, university_id, name, fees, utmlink
       FROM university_programs
       WHERE id = ?`, [id]
        );

        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }

        res.json(program);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch program" });
    }
};

/* ===================== UPDATE PROGRAM ===================== */
export const updateProgram = async(req, res) => {
    try {
        const { id } = req.params;

        await db.query(`UPDATE university_programs SET ? WHERE id = ?`, [
            req.body,
            id,
        ]);

        res.json({ message: "Program updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to update program" });
    }
};

/* ===================== DELETE PROGRAM ===================== */
export const deleteProgram = async(req, res) => {
    try {
        const { id } = req.params;

        // Safety: block delete if specializations exist
        const [
            [spec]
        ] = await db.query(
            `SELECT id FROM program_specializations WHERE program_id = ? LIMIT 1`, [id]
        );

        if (spec) {
            return res.status(400).json({
                message: "Cannot delete program with existing specializations",
            });
        }

        await db.query(`DELETE FROM university_programs WHERE id = ?`, [id]);

        res.json({ message: "Program deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete program" });
    }
};
export const getPublicPrograms = async(req, res) => {
    const { universityId } = req.params;

    const [rows] = await db.query(
        `SELECT id, name, fees, utmlink
     FROM university_programs
     WHERE university_id = ?
     ORDER BY name`, [universityId]
    );

    res.json(rows);
};