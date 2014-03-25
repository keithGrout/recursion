// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
  
var getElementsByClassName = function(className) {
  
	var body = document.body;
	var elements = [];
	
	function walkDom(node, className){
	  if(node.nodeType === document.ELEMENT_NODE){ 
		if(node.classList.contains(className)){
	  		elements.push(node);
	  	}
	  	for(var i = 0; i < node.childNodes.length; i++){  	
	  		walkDom(node.childNodes[i], className);
	  	}
	  }
	  
	}

	walkDom(body, className);
	return elements;
	
  
};


