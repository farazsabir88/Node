const http = require("http");
console.log("hi node mon is installed");

const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.end(
    JSON.stringify({
      id: 1,
      name: "jason",
    })
  );
});

server.listen(8000, () => {
  console.log("server is running...");
});
