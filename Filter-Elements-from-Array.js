var filter = function (arr, fn) {
	return arr.filter((el, i) => fn(el, i));
};
