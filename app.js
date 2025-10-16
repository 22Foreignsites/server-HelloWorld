var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World! Yes sir, Yes sir, Your reading this and from the suburbs, 22 foreign on the beat, and you know he goes to USC");
    //you have to run http://localhost:3001/ for 
  })
  .listen(port);
