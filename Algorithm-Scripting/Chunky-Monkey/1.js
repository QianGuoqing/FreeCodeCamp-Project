function chunk(arr, size) {
        // Break it up.
        var arrLen = arr.length;
        var group = arrLen / size;
        var number = arrLen / group;
        var index = 0;
        var tempArr = [];
        var start = 0;
        var returnArr = [];
        while(index < group) {
            tempArr = arr.slice(start, number * (index + 1));
            returnArr.push(tempArr);
            console.log(tempArr[0]);
            tempArr = [];
            index++;
            start += number;
        }
        return returnArr;
    }

chunk(["a", "b", "c", "d"], 2);