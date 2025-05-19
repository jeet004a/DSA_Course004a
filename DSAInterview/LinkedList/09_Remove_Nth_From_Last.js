// 19. Leetcode remove element from last
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    let slow = dummy
    let fast = dummy

    while (n >= 0) {
        fast = fast.next
        n = n - 1
    }

    while (fast) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return dummy.next
};