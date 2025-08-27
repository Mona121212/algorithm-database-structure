var reverseBetween = function(head, left, right) {
    if(!head || right === left ) return head;

    let dummy = new ListNode(0);

    dummy.next = head;
    let pre = dummy;

    for(let i = 0; i < left - 1; i++) {
        prev = pre.next;
    }

    let cur = prev.next;
    for(let i = 0; i < right - left; i++) {
        let next = cur.next;
        cur.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }
    return dummy.next;
}