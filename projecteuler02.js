function evenSum(num){
	var last = 0;
	var sum = 0;
	var current = 1;
	var temp;

	while(current < num){
		temp = current;
		current += last;
		last = temp;

		if(current % 2 === 0){
			sum += current;
		}

	}
	return sum;
}

console.log(evenSum(4000000));