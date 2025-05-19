class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(data) {
        const NewNode = new Node(data)
        if (this.head == null) {
            this.head = NewNode
            this.tail = NewNode
        } else {
            this.tail.next = NewNode
            this.tail = NewNode
        }

        return this

    }

    addFirst(data) {
        let NewNode = new Node(data)
        NewNode.next = this.head
        this.head = NewNode
        return this
    }


    atEnd(data) {
        let NewNode = new Node(data)
        this.tail.next = NewNode
        this.tail = NewNode
        return this
    }

    atkTh(data, pos) {
        let NewNode = new Node(data)

        let c = 1

        if (pos === 0) {
            NewNode.next = this.head
            this.head = NewNode
            return
        }

        let current = this.head
        while (pos > c && current) {
            current = current.next
            c = c + 1
        }

        if (current) {
            NewNode.next = current.next
            current.next = NewNode
            return this
        }
    }

    delFirst() {
        this.head = this.head.next
        return this
    }

    delLast() {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current = this.tail
        current = null
        return this
    }

    printList() {
        let current = this.head
        while (current) {
            process.stdout.write(current.data)
            process.stdout.write('->')
            current = current.next
        }
    }
}


let a = new LinkedList()
a.add('a')
a.add('b')
a.add('c')
a.printList()
a.addFirst('x')
console.log()
a.printList()

a.atEnd('y')
console.log()
a.printList()

a.atkTh('f', 0)
console.log()
a.printList()

a.delFirst()
console.log()
a.printList()

a.delLast()
console.log()
console.log('abc')
a.printList()