var reverseBetween = function(head, left, right) {
    if(!head || left === right) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;

    // loop to left - 1;
    for(let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    let current = prev.next; // left

    for(let i = 0; i < right - left; i++) {
        let nextNode = current.next; //left + 1;

        current.next = nextNode.next; //left.next connect to left + 1 + 1;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    return dummy.next;

}