import bcrypt from "bcryptjs";
import { db } from "./config/db.js";

const seedAdmin = async () => {
  try {
    const email = "admin@collezers.com";

    const [existing] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "Admin@123",
      10
    );

    await db.query(
      `
      INSERT INTO users
      (
        name,
        email,
        password,
        role,
        status
      )
      VALUES
      (?, ?, ?, ?, ?)
      `,
      [
        "Super Admin",
        email,
        hashedPassword,
        "super_admin",
        "active",
      ]
    );

    console.log("Super Admin Created Successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();