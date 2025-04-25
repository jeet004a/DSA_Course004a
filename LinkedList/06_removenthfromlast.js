// Remove nth node from last node
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
        if (this.head == null) {
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

    printData() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }


    lencur() {
        let current = this.head
        let c = 0
        while (current) {
            c = c + 1
            current = current.next
        }

        return c
    }

    check(n) {
        let slow = this.head
        let fast = this.head
        let c = this.lencur()

        if (n == c) {
            slow = fast.next
            this.head = slow
            return this
        }

        // console.log(c)

        for (let i = 0; i < n; i++) {
            fast = fast.next
        }

        while (fast.next != null) {
            slow = slow.next
            fast = fast.next
        }

        slow.next = slow.next.next

        return
    }
}






let a = new LinkedList()

a.add(1)
a.add(2)
a.add(3)
a.add(4)
a.add(5)


a.printData()
console.log('XXX')
a.check(4)
a.printData()