function isPalindrome(num){
	var temp = num.toString();

	var count = 0;
	for(var i = temp.length;i>0;i--){
		if(temp[count] != temp[i-1]){
			return false;
		}
		count++;
	}
	return true;
}

function findPalindrome(n1, n2){
	var largest = 0;
	for(var i=n1;i<n2;i++){
		for(var j=i;j<n2;j++){
			var product = i * j;
			if(product > largest){
				if(isPalindrome(product) == true){
					largest = product;
				}
			}
		}
	}
	return largest;
}


// console.log(isPalindrome(11));
// console.log(isPalindrome(22022));
// console.log(isPalindrome(12));
// console.log(isPalindrome(12345));
console.log(findPalindrome(100,1000));