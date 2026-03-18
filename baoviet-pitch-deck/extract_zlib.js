const fs = require('fs');

function extractDocx(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.length === 0) throw new Error("Empty file");

  // find 'word/document.xml' inside the zip buffer
  // A docx is a zip file.
  // Instead of full zip parsing, let's just use PowerShell's Expand-Archive which is reliable if we just copy it first and DON'T pipe.
}

