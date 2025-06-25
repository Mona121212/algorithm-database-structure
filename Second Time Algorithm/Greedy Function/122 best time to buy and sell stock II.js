var maxProfit = function(prices) {
    let maxProfix = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            maxProfix += prices[i] - prices[i - 1]
        }
    }
    return maxProfix;
}