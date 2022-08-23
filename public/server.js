"use strict";
let _close;

(function () {
  const express = require("express");
  const server = express();
  const port = 2000;
  require("body-parser").urlencoded({ extended: false });

  server.get("/", function (req, res) {
    res.status(200).json({ value: "server is running" });
  });

  require("events").EventEmitter.defaultMaxListeners = 0;

  const serv = server.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`);
  });

  _close = () => {
    serv.close(err => {
      console.log("Http server closed.");
      process.exit(err ? 1 : 0);
    });
  };
})();

module.exports = { _close };
