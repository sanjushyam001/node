const path = require("path");
const file = path.dirname("D:/FRONTEND-TECHNOLOGIESNODEJS/node-01/test4.txt");
const isAbsolute = path.isAbsolute(
  "D:/FRONTEND-TECHNOLOGIESNODEJS/node-01/test4.txt"
);
const dir = "node-01";
const joinPath = path.join(
  "D:",
  "FRONTEND-TECHNOLOGIESNODEJS",
  dir,
  "text4.txt"
);
console.log(file);
console.log(isAbsolute);
console.log("JOIN PATH: ", joinPath);
