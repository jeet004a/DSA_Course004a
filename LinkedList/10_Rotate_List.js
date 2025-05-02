//Brute Force
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function rotateEnd(list) {
    let dummy = new ListNode(-1)
    let t = dummy
    let first = list
    while (list.next != null) {
        t.next = list
        list = list.next
    }
    t = t.next
    let node = t.next
    t.next = null
    node.next = first
    first = node

    return first
}

var rotateRight = function(head, k) {
    if (head == null || head.next == null) return head
        // let dummy=new ListNode(-1)
        // let t=dummy
        // let first=head
        // while(head.next!=null){
        //     t.next=head
        //     head=head.next
        // }
        // t=t.next
        // let node=t.next
        // t.next=null
        // node.next=first
        // first=node
    for (let i = 0; i < k; i++) {
        head = rotateEnd(head)
    }
    // head=rotateEnd(head)
    // head=rotateEnd(head)

    return head
        // return first
};
//End Brute Force


//Optimal Approch

var rotateRight = function(head, k) {
    if (head == null || head.next == null || k == 0) return head

    let length = 1
    let tail = head
    while (tail.next) {
        length++
        tail = tail.next
    }
    tail.next = head
        // FInd the new tail and then go to the next head and then disconnect the loop in a linkedlist
    let x = length - (k % length)
    let newTail = tail
    for (let i = 0; i < x; i++) {
        newTail = newTail.next
    }

    let newHead = newTail.next
    newTail.next = null

    return newHead

};
//End Optimal Approch