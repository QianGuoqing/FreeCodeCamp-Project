function rot13(str) { // LBH QVQ VG!
        var strLen = str.length;
        var newStr = "";
        for (var i = 0; i < strLen; i++) {
            var charCode = str.charCodeAt(i);
            if (charCode >= 65 && charCode <= 77) {
                charCode += 13;
                newStr += String.fromCharCode(charCode);
            } else if (charCode > 77 && charCode <= 90) {
                charCode = charCode + 13 - 26;
                newStr += String.fromCharCode(charCode);
            } else {
                newStr += str[i];
            }
        }
        return newStr;
    }

// Change the inputs below to test
rot13("SERR PBQR PNZC");
