var convert = function(s, numRows) {
    if(numRows === 1) return s;
    const arrayCovert = new Array(numRows).fill("");

    let row = 0; step;
    for(let i = 0; i < s.length; i++) {
        arrayCovert += s[i];
        if(row === 0) step = 1;
        if(row === numRows - 1 ) step = -1;

        row += step;
    }
    return arrayCovert.join("");
}