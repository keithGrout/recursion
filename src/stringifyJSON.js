// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

  // base case
  if(typeof obj === "boolean" || typeof obj === "number" || obj === null){ return String(obj); }
 
  if(typeof obj === "string") {return '"'+ obj + '"'; }
  
  // recursive case
  if( Array.isArray(obj) ){
    obj = obj.map(stringifyJSON);
    return '[' + obj + ']';
  }
  
 
  if (typeof obj === 'object') {						
    var arr = [];
    for (item in obj) {
      var key = stringifyJSON(item);
      var value = stringifyJSON(obj[item]);
      if (value) arr.push(key + ':' + value);
    }
    return '{' + arr.join() + '}';
  }

  else return undefined;
  
  
};
