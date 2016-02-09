function findIndex(num){
	var index = 0;

	for(var i = 0; i<num;i++){
		var a = fibo(num);
		var b = a.toString();
		
		if(b.length === 1000){
			index = i;
		}
		
	}
	return index;
}
function fibo(num){
	if(num <= 1){
		return num;
	}
	else{
		return fibo(num-2) + fibo(num-1);
	}
}
console.log(findIndex(1000));