function fibonacci(num) {
// your code here
	if (n == 1){
		return 0;
	} 
	else if (n == 2 || n == 3){
	    return 1;
	} 
	else{
	    let prev1 = 1, prev2 = 1;
	    
		for(let i = 4; i <= n; i++){
			let next = prev1 + prev2;
		    prev1 = prev2;
		    prev2 = next;
		}
		return prev2;
	}
	
}

module.exports = fibonacci;
