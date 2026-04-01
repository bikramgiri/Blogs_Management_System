const fs = require("fs");
const path = require("path");

// Helper: delete image file from disk
exports.deleteImageFromDisk = (filename) => {
  if (!filename) return;
  const imagePath = path.join(__dirname, "../storage", filename);
  fs.unlink(imagePath, (err) => {
    if (err) console.error("Failed to delete image:", err);
  });
};
