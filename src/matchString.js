const textToArray = (text) => text.trim().split("\n");

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

exports.textToArray = textToArray;
exports.createList = createList;
