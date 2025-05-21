// 160. Leetcode Find intersection point of two linked list
//Brute force
var getIntersectionNode = function(headA, headB) {
    if (headA == headB) return headA
    let m = new Map()

    while (headA) {
        m.set(headA, 1)
        headA = headA.next
    }


    while (headB) {
        if (m.has(headB)) {
            return headB
        }

        headB = headB.next
    }

    return headA
};

//Most Optimal solution 

var getIntersectionNode = function(headA, headB) {
    if (headA == headB) return headA

    let t1 = headA
    let t2 = headB

    while (t1 != t2) {
        t1 = t1.next
        t2 = t2.next

        if (t1 == t2) {
            return t1
        }

        if (t1 == null) t1 = headA
        if (t2 == null) t2 = headB
    }

    return t1
}