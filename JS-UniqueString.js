function unique(str) {
    for (var i = 0; i < str.length; i++) {
        //check if first and last instances of character are the same
        //if not true then send false
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]))
        return false;
    }
    return true;
}

//unique('car'); true
//unique('apple'); false
//unique('orange'); true
//unique('strewberry'); false