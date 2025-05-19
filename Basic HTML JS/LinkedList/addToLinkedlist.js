class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function addTwoList(x, y) {
    let t1 = x
    let t2 = y
    let dNode = new Node()
    let current = dNode
        // while (t1 != null) {
        //     console.log(t1.data)
        //     t1 = t1.next
        // }
    let carr = 0
    while (t1 != null || t2 != null) {
        let sum = 0

        if (t1 != null) {
            sum = sum + t1.data
            t1 = t1.next
        }
        if (t2 != null) {
            sum = sum + t2.data
            t2 = t2.next
        }

        sum = sum + carr

        carr = sum / 10
        let node = new Node(Math.floor(sum % 10))
        current.next = node
        current = current.next
    }

    if (carr) {
        let node = new Node(Math.floor(carr))
        current.next = node
    }

    return dNode.next
}


// Create a hard-coded linked list:
// 2 -> 4 -> 8 -> 9
// let first = new Node(2)
// first.next = new Node(4)
// first.next.next = new Node(8)
// first.next.next.next = new Node(9)

// let first = new Node(3);
// first.next = new Node(5);

//--------------
let first = new Node(2)
first.next = new Node(4)
first.next.next = new Node(6)
    // Create another hard-coded linked list:
    // 1 -> 3 -> 8 -> 10
    // let second = new Node(1)
    // second.next = new Node(3)
    // second.next.next = new Node(8)
    // second.next.next.next = new Node(10)

let second = new Node(3)
second.next = new Node(8)
second.next.next = new Node(7)

// let second = new Node(4);
// second.next = new Node(5);
// second.next.next = new Node(9);
// second.next.next.next = new Node(9);

// let temp = first

let mLIST = addTwoList(first, second)
let temp = mLIST

while (temp != null) {
    console.log(temp.data)
    temp = temp.next
}