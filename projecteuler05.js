function smallest(num1, num2){
	var ceiling = num2;
	var isFound = false;
	var iterator = num1;

	while(isFound == false){
		if(ceiling % iterator == 0){
			iterator++;
			if(iterator === num2){
				console.log("end ceiling was " + ceiling);
				console.log("end iterator was " + iterator);
				isFound = true;
			}
		}
		else{
			ceiling++;
			iterator = num1;
		}
	}
	return ceiling;
}
//console.log(smallest(1,10));
console.log(smallest(1,20));