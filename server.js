const http = require('http');

const PORT = 8080;
const server = http.createServer((request, response) => {
  console.log('Request made to server!');

  const headers = {
    'Content-Type': 'text/plain',
  };
  let statusCode = 404;
  let body = 'Not Found';

  if (request.url === '/') {
    if (request.method === 'GET') {
      statusCode = 200;
      body = 'Hello, world!';
    }
  } else if (request.url === '/bananas') {
    if (request.method === 'GET') {
      statusCode = 200;
      body = '🍌🍌🍌';
    } else if (request.method === 'POST') {
      // Save new banana
      statusCode = 201;
      body = 'Banana saved!';
    } else {
      // ...others such as PUT, PATCH, DELETE
    }
  }

  response.writeHead(statusCode, headers);
  response.end(body);
});

server.listen(PORT, () => {
  console.log(`Server listening on port :${PORT} 🚀`);
});
