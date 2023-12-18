const events = require("events");
const ev = new events.EventEmitter();
// ev.on("myEvent", (data) => {
//   console.log(data);
// });
// ev.emit("myEvent", "call my event ..");

// ev.once("onceEvent", (status, message) => {
//   console.log(`status: ${status} message: ${message}`);
// });
// ev.emit("onceEvent", 200, "ok");
// ev.emit("onceEvent", 200, "ok");
var c1 = (status, message) => {
  console.log(`status: ${status} message: ${message}`);
};
ev.once("onceEvent", c1);
ev.off("onceEvent", c1);
ev.emit("onceEvent", 200, "ok");
ev.emit("onceEvent", 200, "ok");
