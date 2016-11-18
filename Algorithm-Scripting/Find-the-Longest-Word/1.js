function findLongestWord(str) {
        var strArray = str.split(' ');
        var max = strArray[0].length;
        for (var i = 0; i < strArray.length; i++) {
            if (max < strArray[i].length) {
                max = strArray[i].length;
            }
        }
        return max;
    }

findLongestWord("The quick brown fox jumped over the lazy dog");