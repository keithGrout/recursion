// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // base case
  // is obj a string
  
  // is an obj an array
  // is an obj an object
  // if obj is an array or object, is it nested
  
  if(typeof obj === "boolean" || typeof obj === "number" || obj === null){ return String(obj); }
  
  console.log(obj + " " + typeof obj);
  
  
};
