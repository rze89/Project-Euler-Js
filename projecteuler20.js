
function sumOfStringChars(num){
	var a = factorial(num);
	var b = a.toString();
	var sum = 0;

	for(var i = 0; i < b.length; i++){
		sum += parseInt(b.charAt(i));
	}

	return sum;
}


function factorial(num){
	if(num <= 1){
		return 1;
	}
	else{
		return num * factorial(num -1);
	}
}
console.log(sumOfStringChars(10));