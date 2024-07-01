const { readFileSync, writeFileSync } = require("fs");
const path = require("path");
// this is the same as that we declare the variable fs and then we call fs.readfilesync and fs.writefilesync
const firstPath = path.resolve(__dirname, "content", "first.txt");
console.log(firstPath);
const secondPath = path.resolve(__dirname, "content", "result-sync.txt");
console.log(secondPath);
const first = readFileSync(firstPath, "utf8");
console.log(first);
writeFileSync(secondPath, `Here goes the content of the first txt file:${first}`, { flag: "a" });
