module.exports = {
  login: () => {
      if (req.method === 'GET') {
        let user = {'user': 'Taj'}
        if (route === '/') {
          res.end("Hello Word")

          }
        }
        else {
         res.end(404);
       }
  }
}
