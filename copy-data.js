const fs = require("fs");

const dataDirectory = "./data";
const fileToWrite = "./src/data.js";

const data = {};
fs.readdirSync(dataDirectory).forEach((file) => {
  console.log(file);
  const fileData = require(`${dataDirectory}/${file}`);
  const filename = file.split(".")[0];
  data[filename] = fileData;
});

const dataToWrite = `let data = ${JSON.stringify(data)}`;

fs.writeFileSync(fileToWrite, dataToWrite);
