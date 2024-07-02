const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const first = data;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    const second = data;
    console.log(second);
    writeFile("./content/result-async.txt", `here is the result :${first} & ${second} `, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("done with this task");
    });
  });
});
