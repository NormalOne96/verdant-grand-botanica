const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const MIME = { '.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.svg':'image/svg+xml','.ico':'image/x-icon','.png':'image/png','.woff2':'font/woff2' };
http.createServer((req, res) => {
  let fp = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  fp = path.join(__dirname, 'public', fp);
  fs.readFile(fp, (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'index.html'), (e2, d2) => {
        res.writeHead(e2 ? 500 : 200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-cache' });
        res.end(e2 ? 'Error' : d2);
      });
    } else {
      const ext = path.extname(fp);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain', 'Cache-Control': ext === '.html' ? 'no-cache' : 'max-age=86400' });
      res.end(data);
    }
  });
}).listen(PORT, () => console.log(`VERDANT running on :${PORT}`));
