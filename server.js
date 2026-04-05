const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const MIME = { '.html':'text/html', '.js':'application/javascript', '.json':'application/json', '.css':'text/css', '.ico':'image/x-icon' };
http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  const name = urlPath === '/' ? 'index.html' : urlPath;
  const candidates = [
    path.join(__dirname, 'public', name),
    path.join(__dirname, name)
  ];
  function tryNext(i) {
    if (i >= candidates.length) {
      const idx = fs.existsSync(path.join(__dirname,'public','index.html')) ? path.join(__dirname,'public','index.html') : path.join(__dirname,'index.html');
      fs.readFile(idx,(e,d)=>{ res.writeHead(e?500:200,{'Content-Type':'text/html','Cache-Control':'no-cache'}); res.end(e?'Error':d); });
      return;
    }
    fs.readFile(candidates[i],(err,data)=>{
      if(err){tryNext(i+1);return;}
      const ext=path.extname(candidates[i]);
      res.writeHead(200,{'Content-Type':MIME[ext]||'text/plain','Cache-Control':ext==='.html'?'no-cache':'max-age=86400'});
      res.end(data);
    });
  }
  tryNext(0);
}).listen(PORT,()=>console.log('VERDANT on :'+PORT));
