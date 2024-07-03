const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const ReadFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile("./content/test.txt", `${first} then ${second}`);
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// const result = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// result("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
