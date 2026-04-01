// *Useful in all project
const multer = require("multer"); 

// *For Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) { // cb is a callback function that takes an error and a destination path

    // logic to validate fileType(mimeType)
    const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedFileTypes.includes(file.mimetype)) {
      cb(new Error("Invalid file type. Only JPEG, JPG and PNG are allowed."));
      return;
    }

    cb(null, "./storage"); // the first parameter is an error, the second is the destination path
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
    // *Or
    // // Unique filename: timestamp + original name
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB in bytes
});

module.exports = { upload };
