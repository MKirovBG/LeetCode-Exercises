var validPalindrome = function (input) {
	let reversedStr = input.split('').reverse();
	let copy = input.split('');
	let result = false;

	for (let i = 0; i <= input.length; i++) {
		copy.splice(i, 1);
		reversedStr.splice(i, 1);
		// console.log(copy, reversedStr);

		if (copy.join('') == reversedStr.join('')) {
			result = true;
			break;
		}
	}
	console.log(result);
	return result;
};

validPalindrome('aba');
validPalindrome('abca');
validPalindrome('abc');

// Currently working on solution
