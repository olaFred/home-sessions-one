'use strict'

module.exports = {
	findMinMax: function(list) {
		let result = [];
		let min = list[list.length - 1];
		let max = list[0];
		for (let i = min; i >= 0; i--) {
			if (list[i] < min) {
				min = list[i];
				//return min;
			}
		}
		for (let i = 0; i < list.length; i++) {
			if (list[i] > max) {
				max = list[i];
				//return max;
			}
		}
		if (min === max) {
			result = [min];
		} else {
			result = [min,max];
		}
		return result;
	}
}





