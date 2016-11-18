 function titleCase(str) {
        var strArray = str.split(' ');
        for(var i = 0; i < strArray.length; i++) {
            strArray[i] = strArray[i].toLowerCase();
            strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
        }
        str = strArray.join(' ');
        return str;
    }

titleCase("I'm a little tea pot");
