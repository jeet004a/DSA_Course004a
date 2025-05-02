// Brute fource
var mergeTwoLists = function(list1, list2) {
    let x = []
    let temp = new ListNode(-1)
    let dummy = temp
    let c = 0
    while (list1 != null) {
        let m = list1.val
        x.push(m)
        list1 = list1.next
        c = c + 1
    }

    while (list2 != null) {
        let m = list2.val
        x.push(m)
        list2 = list2.next
        c = c + 1
    }
    // x=x.sort()
    x = x.sort((a, b) => (a - b))
    for (let i = 0; i < c; i++) {
        let newNode = new ListNode(x[i])
        dummy.next = newNode
        dummy = dummy.next
    }




    return temp.next
};


//End Brute fource


//Optimal Approch
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1)
    let temp = dummy

    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            let newNode = new ListNode(list1.val)
            temp.next = newNode
            temp = temp.next
            list1 = list1.next
        } else {
            let newNode = new ListNode(list2.val)
            temp.next = newNode
            temp = temp.next
            list2 = list2.next
        }
    }

    if (list1 != null) {
        temp.next = list1
    }

    if (list2 != null) {
        temp.next = list2
    }

    return dummy.next
};
//End Optimal Approch