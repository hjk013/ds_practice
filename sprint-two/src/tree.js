/* eslint-disable func-names */
const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    }
    return false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// need to figure out how this works for nested children
// how does it iterate?
// let includes = false;

// let findTarget = obj => {
//   // console.log(obj.value === this.children[i].value)
//   if (obj.value === target) {
//     includes = true;
//   } else {
//     obj.children.forEach(child => {
//       findTarget(child);
//     })
//   }
// }
// findTarget(this)
// return includes;
