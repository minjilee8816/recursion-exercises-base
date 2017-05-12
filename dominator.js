const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  // Your code here
  const rootArray = flattenTreeToArray(root); 
  for(let i = 0;  i < rootArray.length; i++) {
    if( rootArray[i].id === id ) {
      return rootArray[i];
    } 
  }
};


const getElementsByClassName = function(root, className) {
  const rootArray = flattenTreeToArray(root); 
  let getElementsByClassNameArray = []; 
  for( let i = 0; i < rootArray.length; i++) {
    if( rootArray[i].className && (rootArray[i].className).indexOf(className) !== -1) {
      getElementsByClassNameArray.push(rootArray[i]);
    } 
  }
  return getElementsByClassNameArray;
};



const getElementsByTagName = function(root, tagName) {
  // Your code here
  const rootArray = flattenTreeToArray(root); 
  let tagNameArray = []; 
  for( let i = 0; i < rootArray.length; i++) {
    if( rootArray[i].tagName === tagName ) {
      tagNameArray.push(rootArray[i]);
    }
  }
  return tagNameArray;
};




module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
