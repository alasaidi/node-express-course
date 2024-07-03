const { writeFileSync } = require("fs");
for (i = 0; i < 10000; i++) {
  writeFileSync("./content/subfolder/big-file.txt", `hello word ${i}`, { flag: "a" });
}
