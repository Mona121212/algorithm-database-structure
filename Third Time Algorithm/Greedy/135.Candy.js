ratings = [1,0,2];

var candy = function(ratings) {
    candys = Array(ratings.length).fill(1);

    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candys[i] = candys[i - 1] + 1;
        }

    }

    for(let i = ratings.length - 2; i>=0; i--) {
        if(ratings[i] > ratings [i + 1]) {
            candys[i] = Math.max(candys[i], candys[i + 1] + 1)
        }
    }

    let count = 0;

    for(let c of candys) {
        count += c;
    }

    return count;
}

candy(ratings);
console.log(candy(ratings));