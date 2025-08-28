var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1;
    while(l < r) {
        let total = numbers[l] + numbers[r];
        if(total === target) {
            return [l + 1, r + 1];
        } else if(total < target) {
            l++;
        } else {
            r--;
        }
    }
}