const net = require("net");
const {IP, PORT}  = require("./constants");

// interpret incoming data as text
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection established");
    const name = "LJW"
    conn.write(`Name: ${name}`);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};


module.exports = { connect }