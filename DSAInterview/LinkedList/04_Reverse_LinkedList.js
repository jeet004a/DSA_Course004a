// 206. Leetcode reverse linked list

var reverseList = function(head) {
    let dummy = head
    let t = new ListNode(-1)
    t.next = dummy
    let prev = null
    while (dummy) {
        let x = dummy.next
        dummy.next = prev
        prev = dummy
        dummy = x
    }
    return prev
};