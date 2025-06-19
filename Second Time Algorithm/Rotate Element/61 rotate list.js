
//make circle
//find breakpoint
// break circle

var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head;

    let length = 1;
    let current = head;
    while(current.next) {
        current = current.next;
        length++;
    }

    k = k % length;
    current.next = head;

    let newTail = head;

    for(let i = 0; i < length - 1 - k; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail = null;

    return newHead;
}