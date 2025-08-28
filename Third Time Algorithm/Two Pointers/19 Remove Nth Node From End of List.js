var removeNthFromEnd = function(head, n) {
    if(!head) return null;
    let dummy = new ListNode(0, head);
    let fast = dummy, slow = dummy;

    // create the gap between fast and slow
    for(let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }

    while(fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
