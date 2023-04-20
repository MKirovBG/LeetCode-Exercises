let containsDuplicate = function (nums) {
	let temp = [];
	let noDuplicates = false;
	for (let num of nums) {
		if (temp.includes(num)) {
			return true;
		} else {
			temp.push(num);
		}
	}
	return noDuplicates;
};
