'use strict';

module.exports = {
  entry: "./home", //что собирать
  output: {
    path: __dirname + "/public", // куда выводить
    filename: "build.js", // имя файла
    library: "home"
  }
}
