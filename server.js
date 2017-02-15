const http = require('http');
const url = require('url').parse;
const PORT = 3000;

const server = http.createServer((req, res) => {
  const route = url(req.url).pathname;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET') {
    if (route === '/') {

      res.setHeader('Content-Type', 'text/plain');
      res.end()

      }
    }
    else {
     res.end(404);
   }

});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);

});
