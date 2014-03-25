// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
		
	if(typeof obj === 'string') obj = '"' + obj + '"';
	if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null ) { obj = '' + obj;}
	
	if( Array.isArray(obj) ){
		for(var i = 0; i < obj.length; i++){
	    	obj[i] = stringifyJSON(obj[i]);
	  	}
	 	obj = '[' + obj.join() + ']';
	}else if(typeof obj === 'object' && obj !== null){
		if(Object.keys(obj).length === 0 ){
			obj = '{}';
		}else{
		
			var stringElements = [];
			for(var key in obj){
				var value = stringifyJSON(obj[key]);
				var prop = stringifyJSON(key);
				stringElements.push(prop + ':' + value);	
			}
			obj = '{' + stringElements.join(", ") + '}';
		}	
	}
		return obj;	
};
