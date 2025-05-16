// 203. Remove Linked List element

var removeElements = function(head, val) {
    if (!head) return head

    let dummy = new ListNode(-1)
    dummy.next = head
    let current = dummy

    while (current.next) {
        if (current.next.val == val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return dummy.next
};