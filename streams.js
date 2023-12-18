const http = require("http");
const fs = require("fs");

// http
//   .createServer((req, res) => {
//     fs.readFile("test4.txt", (err,data) => {
//       if(err){
//         console.log('ERROR: ',err);
//         return
//       }
//       res.end(data);
//     });
//   })
//   .listen(5000, "localhost", () => {
//     console.log("Server has been started");
//   });
// http
//   .createServer((req, res) => {
//     const stream = fs.createReadStream("test4.txt");
//     stream.pipe(res);
//   })
//   .listen(5000, "localhost", () => {
//     console.log("Server has been started");
//   });

// const buf = Buffer.from("hey!");
const buf = Buffer.alloc(4);
buf.write("hey!");
console.log(buf.toString());
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf[3]);
console.log(buf[4]);
