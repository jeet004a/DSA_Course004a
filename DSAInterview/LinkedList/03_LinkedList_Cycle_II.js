// 142. Linked List Cycle II

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (slow == fast) {
            slow = head
            while (slow != fast) {
                slow = slow.next
                fast = fast.next
                if (slow == fast) break
            }
            return slow
        }
    }
    return null
};