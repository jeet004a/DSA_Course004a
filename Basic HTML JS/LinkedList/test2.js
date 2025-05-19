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
            return this.head
        }

        let current = this.head

        while (current.next != null) {
            current = current.next
        }

        current.next = NewNode

        return this.head
    }


    addMidNode() {
        let slow = this.head
        let fast = this.head
        let x = null

        if (this.head.next == null) {
            return
        }

        while (fast != null && fast.next != null) {
            x = slow
            slow = slow.next
            fast = fast.next.next
        }
        slow = x
        slow.next = slow.next.next
        return this.head
    }


    printList() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }


    deleteOcc(n) {
        if (this.head.data == n && this.head.next == null) {
            this.head = null
            return
        } else {
            let p = this.head.next
            this.head = p
        }

        let slow = this.head
        let x = null


        while (slow != null) {
            if (slow.data == n) {
                slow = x
                slow.next = slow.next.next
            } else {
                x = slow
                slow = slow.next
            }
        }

        return
    }
}


let a = new LinkedList()

// a.add(1)
// a.add(2)
// a.add(3)
// a.add(4)
// a.add(5)
a.add(2)
a.add(1)
a.add(2)
a.add(3)
a.add(2)
a.add(4)
a.add(2)
a.printList()
console.log('------------')
    // a.addMidNode()
    // a.printList()

a.deleteOcc(2)
a.printList()