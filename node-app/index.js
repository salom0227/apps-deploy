const http = require('http');

http.createServer((req, res) => {
  res.end("Node.js is running 🚀");
}).listen(3000);
