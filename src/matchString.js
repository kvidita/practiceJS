const splitLines = (text) => text.trim().split("\n");
/*

const searchMatch = function (string, list) {
  return list.find((element) => string === element.slice(0, 4));
};

const createList = function (list1, list2) {
  const list = [];

  list1.map((string) =>
    list.push(string + searchMatch(string.slice(-4), list2).slice(4))
  );

  return list;
};
*/

const createList = function (list1, list2) {
  const a = {};
  const tally = list2.map((word) => {
    a[word.slice(0, 4)] = word.slice(4);
  });

  const list3 = list1.map((element) => element + a[element.slice(-4)]);

  return list3;
};

exports.splitLines = splitLines;
exports.createList = createList;
