const findMinMax = function(list) {
		let result = [];
		let min;
		let max;
		list = list.sort(function(a,b) {
			return [a-b];
		})
		min = list[0];
		max = list[list.length - 1];
		if (min === max) {
			result = [min];
		} else {
			result = [min, max];
		}
		return result;
	}

	console.log(findMinMax([1,2,3,4,5]));
	console.log(findMinMax([4,4,4,4]))
	console.log(findMinMax([7]))