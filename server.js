const http = require('http');
const url = require('url', true, true).parse;
const PORT = 3000;

//Creates a new server instance
const server = http.createServer((req, res) => {

  //Parses URL Routes Ex. "www.example.com/login" = "/login"
  const route = url(req.url).pathname;
//Login Route
  if (req.method === 'POST' && route === '/login') {
    let userData = '';

    //If Payload Exist concat Payload into userData
    req.on('data', (PayLoad) => {
        return userData += PayLoad
      })
      //When Done With Request
      .on('end', () => {
        let User = JSON.parse(userData);
        //Here Is Where We Would Authenticate User In Database and Set Session Object To User ID

        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end('Logged In');
      })
      .on('error', (err) => {
        console.log(`Ohh oh! error: ${err.message}`);
        res.statusCode(500)
      });
  }

//Logout Routes
  if (req.method === 'GET' && route === '/logout') {
    //Destory Session Object
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(route)
    res.end('Logged Out!');
    res.on('error', (err) => {
      console.log(`Ohh oh! error: ${err.message}`);
      res.statusCode(500)
    });
  }




});

//Starts 'Server' On Port Specifed
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);

});
