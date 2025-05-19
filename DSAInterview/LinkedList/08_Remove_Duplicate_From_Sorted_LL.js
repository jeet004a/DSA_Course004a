// 82. Leetcode Remove duplicate from Sorted List II

var deleteDuplicates = function(head) {
    if (!head) return head
    let dummy = new ListNode(0, head)
    let prev = dummy
    let curr = head

    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            let d = curr.val

            while (curr && curr.val == d) {
                curr = curr.next
            }
            prev.next = curr
        } else {
            prev = curr
            curr = curr.next
        }
    }
    return dummy.next
}

// 83. Leetcode Remove duplicate from Sorted List I

var deleteDuplicates = function(head) {

    if (!head) return head
    let dummy = head

    while (dummy.next) {
        if (dummy.val === dummy.next.val) {
            dummy.next = dummy.next.next
        } else {
            dummy = dummy.next
        }
    }

    return head
};