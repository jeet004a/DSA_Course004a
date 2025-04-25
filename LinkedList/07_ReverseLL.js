// Reverse a singly LL

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
        let newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            return
        }

        let current = this.head

        while (current.next) {
            current = current.next
        }

        current.next = newNode

        return this
    }

    reverse() {
        let current = this.head
        let prev = null
        let fast = null

        while (current != null) {
            fast = current.next
            current.next = prev
            prev = current
            current = fast
        }
        this.head = prev
    }

    printLL() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}


let a = new LinkedList()

a.add(1)
a.add(2)
a.add(3)
a.add(4)
a.add(5)

a.printLL()
console.log('-----------------')
a.reverse()

a.printLL()