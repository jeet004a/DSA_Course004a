class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
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
        NewNode.prev = current
        current.next = NewNode
        return
    }

    findtail(ll) {
        while (ll.next != null) {
            ll = ll.next
        }
        return ll
    }


    check(n) {
        let first = this.head
        let last = this.findtail(first)
        let r = []
        let c = 0
        while (first.data < last.data) {
            if (first.data + last.data == n) {
                let s = new Set([first.data, last.data])
                r.push(s)
                first = first.next
                last = last.prev
            } else if (first.data + last.data < n) {
                first = first.next
            } else {
                last = last.prev
            }
        }

        console.log(r)
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

a.add(1)
a.add(2)
a.add(3)
a.add(4)
a.add(5)

// a.printList()

a.check(6)