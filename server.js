const http = require('http');
const url = require('url').parse;
const PORT = 3000;

const server = http.createServer((req, res) => {
  const route = url(req.url).pathname;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'POST') {
    if (route === '/login') {

      console.log(`HEADERS: ${JSON.stringify(req.headers)}`);

       req.on('data', (userInfo) => {
          console.log(userInfo.toString())
       })

       req.on('end', () => {
           res.writeHead(200, {'Content-Type': 'text/html'})
           res.end('Data received.')
       })
       .on('error', (err) => {
          console.log(`Got error: ${err.message}`);
});

    }
  } else {
    res.end(404);
  }

});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);

});
