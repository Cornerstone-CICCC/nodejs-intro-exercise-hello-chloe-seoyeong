import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

  // Home route
  if(req.url === "/") {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(`<h1>Home</h1>`)
    return
  }

  // About route
  if(req.url === "/about") {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(`<h1>About</h1>`)
    return;
  }

  // Account route
  if(req.url === '/my-account') {
    res.writeHead(403, { 'content-type': 'text/plain' });
    res.end('You have no access to this page.')
    return
  }

  res.writeHead(404, { 'content-type': 'text/plain' });
  res.end("Page not found")
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
