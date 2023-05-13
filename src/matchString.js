const textToArray = (text) => text.trim().split("\n");

const searchMatch = function (string, list) {
  return list.find(function (element) {
    return string === element.slice(0, 4);
  });
};

const createList = function (list1, list2) {
  const list = [];

  list1.map(function (string) {
    const match = searchMatch(string.slice(-4), list2);
    const newString = string.concat(match.slice(4));
    list.push(newString);
  });

  return list;
};

exports.textToArray = textToArray;
exports.createList = createList;
