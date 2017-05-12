const visitAllNodes = function (node, callback) {
  if(node.childNodes) {
    for(let i = 0; i < node.childNodes.length; i++) {
      visitAllNodes( node.childNodes[i], callback);
    }
  }
  callback(node); 
}

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here 
  const flattenArray = []; 
  visitAllNodes(node, child => flattenArray.push( child ) ); 
  return flattenArray;
};

// console.log(flattenTreeToArray())
module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};

