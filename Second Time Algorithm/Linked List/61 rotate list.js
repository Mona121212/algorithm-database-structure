var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head;
    let current = head;
    let length = 1;
    while(current.next) {
        current = current.next;
        length++;
    }
    current.next = head; // cycling

    let newNode = head;
    for(let i = 0; i < length - 1 - k; i++) {
        newNode = newNode.next;
    }

    let newHead = newNode.next;
    newNode = null;

    return newHead;

}