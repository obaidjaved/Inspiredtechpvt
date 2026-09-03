const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'public', 'portfolio-mockup-template.html'), 'utf-8');

// Find all img tags with data:image src
const imgRegex = /<img[^>]+src="(data:image\/[^"]+)"[^>]*>/g;
const images = [];
let match;
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}

console.log(`Found ${images.length} base64 images`);

// Map slugs to image indices based on order in HTML
const slugs = [
  'tapsvs-lms', 'dikhatz-shopify', 'khadamatfm-ae', 'drive-venturous',
  'meri-pharmacy', 'made-by-throne', 'clineum-medical', 'webratek-uk',
  'fusion-experts', 'pegasus-writing', 'thread21-pk', 'english-evolution',
  'agrilift-ai', 'ufussas-closet',
];

const outDir = path.join(__dirname, 'public', 'case-studies');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

images.forEach((dataUri, i) => {
  if (i >= slugs.length) return;
  const slug = slugs[i];
  // Extract mime and base64 data
  const matches = dataUri.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!matches) return;
  const ext = matches[1].split('/')[1] === 'jpeg' ? 'jpg' : matches[1].split('/')[1];
  const buf = Buffer.from(matches[2], 'base64');
  const filePath = path.join(outDir, `${slug}.${ext}`);
  fs.writeFileSync(filePath, buf);
  console.log(`Saved ${slug}.${ext} (${(buf.length / 1024).toFixed(1)} KB)`);
});

console.log('Done');
