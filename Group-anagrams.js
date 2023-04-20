let groupAnagrams = function (strs) {
	let result = [];

	if (strs.length == 0) {
		return [['']];
	}

	for (let i = 0; i < strs.length; i++) {
		const count = strs[i]
			.split('')
			.sort()
			.reduce((acc, cur) => {
				if (acc[cur]) {
					acc[cur]++;
				} else {
					acc[cur] = 1;
				}
				return acc;
			}, {});

		let tempArr = [];

		let foundMatch = false;
		let counter = 0;
		let comparisonAvailable = false;

		for (let j = i + 1; j < strs.length; j++) {
			const secondCount = strs[j]
				.split('')
				.sort()
				.reduce((acc, cur) => {
					if (acc[cur]) {
						acc[cur]++;
					} else {
						acc[cur] = 1;
					}
					return acc;
				}, {});

			let objOne = JSON.stringify(count);
			let objTwo = JSON.stringify(secondCount);
			comparisonAvailable = true;
			if (objOne == objTwo && counter == 0) {
				if (foundMatch) {
					tempArr.push(strs[j]);

					let index = strs.indexOf(strs[j]);
					strs.splice(index, 1);
				}
				if (!foundMatch) {
					tempArr.push(strs[i]);
					tempArr.push(strs[j]);
					foundMatch = true;

					let index = strs.indexOf(strs[j]);
					strs.splice(index, 1);
				}
			}
		}

		// if (!comparisonAvailable) {
		// 	result.push([strs[i]]);
		// }

		if (!foundMatch) {
			result.push([strs[i]]);
		}
		if (tempArr.length > 0) {
			result.push(tempArr);
		}
	}

	return result;
	// [["b"],["",""]]
}; // [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['', 'b', '']));
