let isAnagram = function (s, t) {
	let lengthS = s.length;
	let lengthT = t.length;

	if (lengthS !== lengthT) {
		return false;
	} else {
		return loop(s, t);
	}

	function loop(arrOne, arrTwo) {
		let objOne = {};
		let objTwo = {};
		for (let i = 0; i < arrOne.length; i++) {
			if (!objOne.hasOwnProperty(arrOne[i])) {
				objOne[arrOne[i]] = 1;
			} else {
				objOne[arrOne[i]] += 1;
			}

			if (!objTwo.hasOwnProperty(arrTwo[i])) {
				objTwo[arrTwo[i]] = 1;
			} else {
				objTwo[arrTwo[i]] += 1;
			}
		}

		let check = false;
		for (let key in objOne) {
			if (objOne[key] !== objTwo[key]) {
				return false;
			} else {
				check = true;
			}
		}
		if (check) {
			return check;
		}
	}
};
