const http = require('http');

http.createServer((req, res) => {
  res.end("CI/CD WORKING 🔥 " + new Date());
}).listen(3000);
