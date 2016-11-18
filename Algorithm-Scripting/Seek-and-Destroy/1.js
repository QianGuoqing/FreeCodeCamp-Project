function destroyer(arr) {
        // Remove all the values
        var arrLen = arr.length;
        var argLen = arguments.length;
        for (var i = 0; i < arrLen; i++) {
            for (var j = 1; j < argLen; j++) {
                if(arr[i] === arguments[j]) {
                    arr.splice(i, 1);
                  i--;
                }
            }
        }
        return arr;
    }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
