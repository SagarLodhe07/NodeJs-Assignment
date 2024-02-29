const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello Students");
  } else {
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server Connected");
});
