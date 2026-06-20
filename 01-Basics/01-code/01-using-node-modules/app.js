const http = require("http");
const routes = require("./routes");

// Create an HTTP server
const server = http.createServer(routes);

// Start the server and listen on port 8080
server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
