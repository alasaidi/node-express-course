const { readFile } = require("fs");

const result = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await result("./content/first.txt");
    const second = await result("./content/second.txt");
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// result("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
