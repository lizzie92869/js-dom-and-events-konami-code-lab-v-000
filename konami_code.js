const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
	
	// listen to the keydown, when the 38 is typed, keep listening for another 38, then 40 etc..
	document.addEventListener('keydown',  function keydown(e){

  	const key = parseInt(e.detail || e.which);
  	if (key === code[index]) {
    	index++;
    	if (index === code.length) {
      	alert("You cracked the code");
      	index = 0; 
      	}
  	}else{
  		index = 0;
 	}
	});
}




