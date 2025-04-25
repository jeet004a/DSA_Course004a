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
            return
        }
        let current = this.head
        while (current.next != null) {
            current = current.next
        }

        current.next = NewNode
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

a.printLL()