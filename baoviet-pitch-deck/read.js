const fs = require('fs');
const AdmZip = require('adm-zip');

try {
  const buffer = fs.readFileSync('GIẢI VÔ ĐỊCH ĐUA GHE TRUYỀN THỐNG CỐ ĐÔ HUẾ 2026.docx');
  const zip = new AdmZip(buffer);
  const xml = zip.readAsText('word/document.xml');
  const text = xml.replace(/<w:p [^>]*>/g, '\n').replace(/<[^>]+>/g, '');
  fs.writeFileSync('docx_extracted.txt', text);
  console.log('Success');
} catch (e) {
  console.error(e);
}
