// const http = require("http");

// const index = (request, response) => {
//   response.writeHead(200);
//   response.end("Welcome my friends!");
// };
// const aboutus = (request, response) => {
//   response.writeHead(200);
//   response.end("Welcome about us page!");
// };
// http
//   .createServer((req, res) => {
//     if (req.url == "/") {
//       return index(req, res);
//     }
//     if (req.url == "/aboutus") {
//       return aboutus(req, res);
//     }
//   })
//   .listen(5000, "localhost", () => {
//     console.log("Server has been started....");
//   });

//----------------------

const http = require("http");

const routes = {
  "/": (request, response) => {
    response.writeHead(200);
    response.end("Welcome my friends!");
  },
  "/aboutus": (request, response) => {
    response.writeHead(200);
    response.end("Welcome  aboutus!");
  },
};

http
  .createServer((req, res) => {
    if (req.url in routes) {
      console.log(`KEY: ${req.url}`);
      return routes[req.url](req, res);
    }
  })
  .listen(5000, "localhost", () => {
    console.log("Server has been started....");
  });
