// Move ALL zero's at the end
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

    callen() {
        let current = this.head

        let c = 0
        while (current) {
            // console.log(current.data)
            c = c + 1
            current = current.next
        }

        return c
    }

    moveztoend() {
        let slow = null
        let fast = this.head
        let c = this.callen(fast)
        let x = 0

        while (fast) {
            if (fast.data != 0) {
                if (slow == null) {
                    slow = fast
                    this.head = slow
                    x = x + 1
                } else {
                    slow.next = fast
                    slow = fast
                    x = x + 1
                }
            }
            fast = fast.next
        }



        while (x < c) {
            let newNode = new Node(0)
            slow.next = newNode
            slow = slow.next
            x = x + 1
        }

        slow.next = null
        let current = this.head

        // while (current) {
        //     console.log(current.data)
        //     current = current.next
        // }

        return this
    }
}






let a = new LinkedList()

a.add(0)
a.add(2)
a.add(0)
a.add(4)
a.add(0)
a.add(6)
a.add(1)

a.printData()
console.log('XXX')
a.moveztoend()

a.printData()
    // console.log(a)
    // check(a, b)