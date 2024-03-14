function fibonacci(num) {
// your code here
	var n1 = 0; // declaration of variables n1, n2, i and temp.  
	var num = 1;  
	var temp;  
	var i = 0;
	
	for (i = 0; i < num; i++)  {
		temp = n1 + num; // store the sum of n1 and n2 in temp variable.  
		n1 = num; // assign the n2 value into the n1 variable  
		num = temp; // assign the new value of temp into n2 variable  
	} 
	return num; 
	
}

module.exports = fibonacci;
