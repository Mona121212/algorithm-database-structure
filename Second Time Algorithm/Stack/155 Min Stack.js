var MinStack = function() {
    this.elements = [];
}

MinStack.prototype.push = function(val) {
    this.elements.push({
        value: val,
        min: this.elements.length === 0 ? val : Math.min(val, this.getMin()),
    })
}

MinStack.prototype.pop = function() {
    return this.elements.pop();
}

MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value;
}

MinStack.prototype.getMin = function() {
    return this.elementss[this.elements.length - 1].min;
}