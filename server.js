const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    app: "Praesto Node Test",
    status: "running",
    path: req.url
  }));
});

server.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("Praesto test app running");
});
