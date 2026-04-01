const { addCategory, fetchAllCategories, fetchCategory, updateCategory, deleteCategory } = require("../controller/categoryController");
const { upload } = require("../middleware/multerConfig");

const router = require("express").Router();

router.route("/category")
.post(upload.single('categoryImage'), addCategory)
.get(fetchAllCategories);

router.route("/category/:id")
.get(fetchCategory)
.patch(upload.single('categoryImage'), updateCategory)
.delete(deleteCategory);

module.exports = router;