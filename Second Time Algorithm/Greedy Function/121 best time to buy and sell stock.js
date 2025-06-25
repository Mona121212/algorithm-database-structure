var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let maxProfix = 0;
    for(let i = 0; i < prices.length; i++) {
        if(buyPrice > prices[i]) {
            buyPrice = prices;
        }

        maxProfit = Math.max(maxProfit, prices[i] - buyPrice);
    }
    return maxProfit;
}