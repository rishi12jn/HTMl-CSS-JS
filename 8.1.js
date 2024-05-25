const http = require('http');

// Define the port on which the server will listen
const port = 3000;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the status code and content type of the response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write the response body
  res.end('Hello, World!\n');
});

// Start the server and make it listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
