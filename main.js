const fs = require("fs");
const { createList, splitLines } = require("./src/matchString.js");

const main = function () {
  const content1 = process.argv[2];
  const content2 = process.argv[3];

  const file1 = fs.readFileSync(content1, "utf-8");
  const file2 = fs.readFileSync(content2, "utf-8");

  const list1 = splitLines(file1);
  const list2 = splitLines(file2);

  const list3 = createList(list1, list2);
  console.log(list3);
  // fs.writeFileSync("./resource/source3.txt", list3.join("\n"));
};

main();
