import universityData from "../data.js";
/* ---------------- ADD PROGRAM FEE ---------------- */
export const createProgramFee = async(req, res) => {
    try {
        const { program_id, semname, semWise } = req.body;

        if (!program_id || !semWise) {
            return res.status(400).json({
                message: "program_id and semWise are required",
            });
        }

        await db.query(
            `INSERT INTO program_fee_details (program_id, semname, semWise)
       VALUES (?, ?, ?)`, [program_id, semname || null, semWise]
        );

        res.json({ message: "Program fee added successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to add program fee" });
    }
};

/* ---------------- GET PROGRAM FEES ---------------- */
export const getProgramFees = async(req, res) => {
    try {
        const { programId } = req.params;

        const [rows] = await db.query(
            `SELECT * FROM program_fee_details
       WHERE program_id = ?
       ORDER BY id`, [programId]
        );

        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch program fees" });
    }
};