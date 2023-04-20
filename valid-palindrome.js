var validPalindrome = function (input) {
	let reversedStr = input.split('').reverse();
	let copy = input.split('');
	let result = false;

	for (let i = 0; i <= input.length; i++) {
		copy.splice(i, 1);
		reversedStr.splice(i, 1);
		console.log(copy, reversedStr);

		if (copy.join('') == reversedStr.join('')) {
			result = true;
			break;
		}
	}
	console.log(result);
	return result;
};

// validPalindrome('aba');
validPalindrome('abca');
// validPalindrome('abc');

/*Given a string s, return true if the s can be palindrome after deleting at most one character from it.*/
let str = 'hello';

// for (let i = 0; i < str.length; i++) {
// 	console.log(str);
// 	str = str.split('');
// 	str.splice(i, 1);
// 	str = str.join('');
// }

// console.log(str);
