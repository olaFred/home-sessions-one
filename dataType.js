const dataTypes = function(x) {
		if(x === null) {
			return 'no value';
		} else if (typeof x === 'undefined') {
			return 'no value';
		} else if (typeof x === 'string') {
			return x.length;
		} else if (typeof x === 'boolean') {
			return x;
		} else if (typeof x === 'number') {
			if (x < 100) {
				return 'less than 100';
			} else if (x > 100) {
				return 'more than 100';
			} else {
				return 'equal to 100';
			}
		} else if (typeof x === 'object') {
			if (x.length > 2) {
				return x[2];
			} else {
				return undefined;
			}
		} else if (typeof x == 'function') {
			return x(true);
		}
	}

	console.log(dataTypes([1,2,3,4,5]));