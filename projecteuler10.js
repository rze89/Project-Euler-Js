function summation(num){
	var boolArray = [];
	var sum = 0;

	for(var i = 0; i<num;i++){
		boolArray[i] = true;
	}

	for(var i = 2; i<Math.sqrt(num);i++){
		if(boolArray[i] == true){
			for(var j = Math.pow(i,2);j<num; j+= i){
				boolArray[j] = false;
			}
		}
	}
	for(var i = 2; i<num;i++){
		if(boolArray[i] == true){
			sum += i;
		}
	}
	console.log(boolArray[2]);
	return sum;
}

console.log(summation(2000000));
