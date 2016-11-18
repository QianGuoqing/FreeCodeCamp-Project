function confirmEnding(str, target) {
        // "Never give up and good luck will find you."
        // -- Falcor
        var strArray = str.split(' ');
        if (strArray.length > 1) {
            if (strArray[strArray.length-1] === target) {
                return true;
            }else {
                var targetLength = target.length;
                var strArrayLength = strArray[strArray.length - 1].length;
                var deltaLength = strArrayLength - targetLength;
                var subS = strArray[strArray.length - 1].substr(deltaLength);
                console.log(deltaLength);
                if (subS === target) {
                    return true;
                }
            }
        } else {
            if (str[str.length-1] === target) {
                return true;
            }
        }
        return false;
    }

confirmEnding("Bastian", "n");
