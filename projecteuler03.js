function iterate(num){
	var gcf;
	var n = Math.sqrt(num);
	console.log(n);
	for(var i=0;i<n;i++){
		if(num % i == 0){
    		if(isPrime(i) == true)
				gcf = i;
			}
		}
	return gcf;
};
function isPrime(num){
	if(num % 2 == 0){
		return false;
	}
	for(var i=2; i<num;i++){
		if(num % i == 0){
			return false;
		}
	}
	return true;
};
console.log(iterate(600851475143));