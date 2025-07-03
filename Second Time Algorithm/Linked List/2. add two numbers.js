var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    if(l1 || l2 || carry !== 0) {
        let sum = carry;
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.float(sum % 10);
        current.next = new ListNode(sum / 10);
        current = current.next;
    }
}