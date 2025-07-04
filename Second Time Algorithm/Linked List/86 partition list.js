var partition = function(head, x) {
    let beforeX = new ListNode(0);
    let afterX = new ListNode(0);
    let before = beforeX;
    let after = afterX;
    while(head) {
        if(head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }
    after.next = null;
    before.next = afterX.next;

    return beforeX.next;
      
}
