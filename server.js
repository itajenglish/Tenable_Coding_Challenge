const http = require('http');
const url = require('url').parse;
const PORT = 3000;

const server = http.createServer((req, res) => {
  const route = url(req.url).pathname;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'POST') {
    if (route === '/login') {

      res.setHeader('Content-Type', 'text/plain');
      res.on('data', (payload) => {
         console.log(`Data: ${payloaad}`);
         res.end()
       });

    }
  } else {
    res.end(404);
  }

});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);

});
