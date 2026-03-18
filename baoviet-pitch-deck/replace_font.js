const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

walk('src').forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('font-black')) {
    fs.writeFileSync(file, content.replace(/font-black/g, 'font-bold'));
    console.log(`Updated ${file}`);
  }
});
