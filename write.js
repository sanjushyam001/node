const fs = require("fs");

// const content=[{
//     'type':'Node Application'
// }]

// fs.writeFileSync('writetest.txt',JSON.stringify(content))

const content = "PPHeloo frinds Application";

fs.writeFile("test4.txt", content, { flag: "a" }, (err, data) => {
  if (err) {
    throw err;
    return;
  }
  console.log("File successfully written");
});
