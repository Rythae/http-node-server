const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
const routeMap = {
  "/": "views/home.html"
};
    
const routeMapAbout = {
  "/about": "views/about.html"
};
    
const routeMapContact = {
  "/contact": "views/contact.html"
};
    
const routeMapHome = {
  "/home": "views/home.html"
};

  if (routeMap[req.url]) {
      fs.readFile(routeMap[req.url], (error, data) => {
        res.write(data);
        res.end();
      });
  } else if (routeMapAbout[req.url]) {
      fs.readFile(routeMapAbout[req.url], (error, data) => {
        res.write(data);
        res.end();
      });
} else if (routeMapContact[req.url]) {
      fs.readFile(routeMapContact[req.url], (error, data) => {
        res.write(data);
        res.end();
      });

} else if (routeMapHome[req.url]) {
      fs.readFile(routeMapHome[req.url], (error, data) => {
        res.write(data);
        res.end();
      });
}
  else {
      res.end("<h1>Sorry, not found.</h1>");
    }
});

server.listen(5000);
console.log("Server is listening at port 5000");