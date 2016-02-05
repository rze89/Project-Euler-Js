function sumOfSquares(num){
	var sum = 0;

	for(var i=1;i<=num;i++){
		sum += (i*i);
	}
	return sum;
}

function squareOfSums(num){
	var square = 0;
	var sum = 0;
	for(var i=1;i<=num;i++){
		sum += i;
	}
	square = sum * sum;
	return square;
}

//console.log(sumOfSquares(10));
//console.log(squareOfSums(10));
var answer = squareOfSums(100) - sumOfSquares(100);
console.log(answer);