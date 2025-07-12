var intToRoman = function(num) {
    const one = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hur = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];

    const roman = ths[Math.floor(num/1000)] + hur[Math.floor((num%1000)/100)] + ten[Math.floor((num % 100) / 10)] + one[Math.floor(num % 10)];
    return roman;
    
};