var canCompleteCircuit = function(gas, cost) {
    let currentTank = 0;
    let totalTank = 0;
    let startIndex = 0;
    for(let i = 0; i < gas.length; i++){
        currentTank += gas[i] - cost[i];
        if(currentTank < 0) {
            startIndex = i + 1;
            currentTank = 0;
        }
        totalTank += gas[i] - cost[i];
    }
    return totalTank >= 0 ? startIndex : -1;
}