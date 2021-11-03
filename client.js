const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection established");
  });

  const name = "LJW"
  conn.write(`Name: ${name}`);

  return conn;
};

module.exports = connect;