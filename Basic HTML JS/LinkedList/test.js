class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }

    add(data) {
        let NewNode = new Node(data)
        if (this.head == null) {
            this.head = NewNode
            return this
        }

        let current = this.head
        while (current.next != null) {
            // current.next = NewNode
            current = current.next
        }
        current.next = NewNode

        return this
    }

    findtail(ll) {
        while (ll.next.next) {
            ll = ll.next
        }

        return ll
    }


    check(n) {
        if (this.head.next == null) {
            return
        }
        while (n != 0) {
            let current = this.head
            let tail = this.findtail(current)

            // console.log(tail.data)
            let newNode = tail.next
            tail.next = null
            newNode.next = this.head
            this.head = newNode
            n = n - 1
        }


        return

    }





    printList() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}


let a = new LinkedList()

// a.add(10)
// a.add(20)
// a.add(30)
// a.add(40)
// a.add(50)
// a.add(60)

a.add(1)
a.add(2)
a.add(3)
a.add(4)
a.add(5)
a.add(6)
a.add(7)


// a.printList()
console.log('-------------')
    // a.rearrangeOddEven()

// a.reverseList()
a.check(2)

console.log('-------------')
a.printList()