function fibonacci(num) {
// your code here
	if (num == 1){
		return 0;
	} 
	else if (num == 2 || num == 3){
	    return 1;
	} 
	else{
	    let prev1 = 1, prev2 = 1;
	    
		for(let i = 4; i <= num; i++){
			let next = prev1 + prev2;
		    prev1 = prev2;
		    prev2 = next;
		}
		return prev2;
	}
	
}

module.exports = fibonacci;
