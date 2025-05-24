// 86. Leetcode Partition List

var partition = function(head, x) {
    let temp = head
    let dummy = new ListNode(null)
    let left = new ListNode(-1)
    dummy.next = left
    let dummy2 = new ListNode(-1)
    let right = new ListNode(-1)
    dummy2.next = right

    while (temp) {
        if (temp.val < x) {
            left.next = temp
            left = left.next
        } else if (temp.val >= x) {
            right.next = temp
            right = right.next
        }
        temp = temp.next
    }

    left.next = null
    right.next = null

    left.next = dummy2.next.next

    return dummy.next.next
};