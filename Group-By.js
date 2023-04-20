Array.prototype.groupBy = function (fn) {
	return this.reduce((acc, item) => {
		const key = fn(item);
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(item);
		return acc;
	}, {});
};

const array = [{ id: '1' }, { id: '1' }, { id: '2' }];
const result = array.groupBy(function (item) {
	return item.id;
});
// console.log(result);

Object.values(result).map((el) => console.log(el.map((el) => console.log(el))));

/*
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}

Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.

*/
