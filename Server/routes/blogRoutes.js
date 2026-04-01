const { addBlog, fetchAllBlogs, fetchBlog, updateBlog, deleteBlog } = require("../controller/blogController");
const { upload } = require("../middleware/multerConfig");

const router = require("express").Router();

router.route("/blog")
.post(upload.single('image'), addBlog)
.get(fetchAllBlogs);

router.route("/blog/:id")
.get(fetchBlog)
.patch(upload.single('image'), updateBlog)
.delete(deleteBlog);



module.exports = router;