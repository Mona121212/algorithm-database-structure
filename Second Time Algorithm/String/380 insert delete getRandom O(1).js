var RandomizedSet = function() {
    this.list = [];
    this.map = new Map();
}

RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false;

    this.list.push(val);
    this.map.set(val, this.list.length - 1);

    return true;
}

RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)) return false;

    const indexToRemove = this.map.get(val);
    const lastElement = this.list[this.list.length - 1];

    // find target element and let it equal to last element;
    this.list[indexToRemove] = lastElement;

    // storage the new index of last element;
    this.map.set(val, indexToRemove);

    // remove the last element
    this.list.pop();
    // delete the val directly
    this.map.delete(val);
    return true;
}

RandomizedSet.prototype.getRandom = function() {
    // Math.random() => [0, 1)
    const randomIndex = Math.floor(Math.random() * this.list.length);

    return randomIndex;
}