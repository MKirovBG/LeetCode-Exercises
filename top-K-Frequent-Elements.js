/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

function topKFrequent(nums, k) {
	const freqMap = new Map();
	for (const num of nums) {
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	}
	console.log(freqMap);

	const freqArr = Array.from(freqMap.entries());

	freqArr.sort((a, b) => b[1] - a[1]);

	const topKFrequentArr = freqArr.slice(0, k);

	const result = topKFrequentArr.map((pair) => pair[0]);
	console.log(result);
	return result;
}

topKFrequent([1, 1, 1, 2, 2, 3], 2);
topKFrequent([1], 1);
