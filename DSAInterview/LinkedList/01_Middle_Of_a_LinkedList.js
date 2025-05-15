//876. Leetcode Middle of the Linked List


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function check(head) {
    let c = 0
    while (head) {
        c = c + 1
        head = head.next
    }
    return c

}
var middleNode = function(head) {
    if (!head) return head
    let c = check(head)
    if (c == 1) return head
    let mid = Math.floor(c / 2) - 1

    while (mid > 0) {
        head = head.next
        mid--
    }

    return head.next
};