var removeNthFromEnd = function(head, n){
    let dummy = new ListNode(0, head);
    let slow = dummy;
    //let fast = dummy;

    for(let i = 0; i < n; i++) {
        head = head.next;
    }

    while(head) {
        head = head.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}