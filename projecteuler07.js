
function findPrime(num){
	var nthPrime;
	var iterator = 0;
	var primes = 0;

	while(primes != num){
		if(isPrime(iterator) == true){
			primes++;
		}
		if(primes == num){
				nthPrime = iterator;
		}
		iterator++;
	}
	return nthPrime;
}
function isPrime(num){
	if(num % 2== 0){
		return false;
	}
	for(var i=2;i<num;i++){
		if(num % i == 0){
			return false;
		}
	}
	return true;
}

console.log(findPrime(10001));