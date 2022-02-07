const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

// P.S. Does not assume lists are the same size...sorry!
function zipList(one, two) {
  let i = 0;
  const returnArray = [];
  while (i < one.length || i < two.length) {
    if (i < one.length) {
      returnArray.push(one[i]);
    }
    if (i < two.length) {
      returnArray.push(two[i]);
    }
    i++;
  }
  return returnArray;
}

function zipListTheSimpleWay(one, two) {
  return _.flatten(_.zip(one, two));
}

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
