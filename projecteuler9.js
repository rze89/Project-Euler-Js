function findTrip(){
	var a,b,c, product;
	a =1;
	b= a+1;

	while(a<1000){
		while(b<1000 && b > a){
			c = 1000 - a - b;
			if(c < b || c < a){
				break;
			}
			if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)){
				product = a * b * c;
				return product;
			}
			b++;
		}
		a++;
		b = a + 1;
	}
}
console.log(findTrip())