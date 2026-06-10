import express from "express";
import {
    getBlogsAdmin,
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogsPublic,
    getBlogBySlug
} from "../controllers/blogController.js";

import { protect } from "../middleware/authMiddleware.js";
import createUploader from "../middleware/uploadServiceImage.js";

const router = express.Router();

/* ============================= */
/* CREATE UPLOADER */
/* ============================= */

const uploadBlog = createUploader("blogs");

/* ============================= */
/* ADMIN */
/* ============================= */

router.get("/admin/blogs", protect, getBlogsAdmin);

router.post(
    "/admin/blogs",
    protect,
    uploadBlog.single("image"),
    createBlog
);

router.put(
    "/admin/blogs/:id",
    protect,
    uploadBlog.single("image"),
    updateBlog
);

router.delete("/admin/blogs/:id", protect, deleteBlog);

/* ============================= */
/* PUBLIC */
/* ============================= */

router.get("/public/blogs", getBlogsPublic);
router.get("/public/blogs/:slug", getBlogBySlug);

export default router;