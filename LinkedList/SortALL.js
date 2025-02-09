// Sort a LinkedList of 0's, 1's and 2's 

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

    sort() {
        if (!this.head || !this.head.next) return this.head

        let zeroHead = new Node(-1)
        let twoHead = new Node(-1)
        let oneHead = new Node(-1)

        let temp = this.head
        let zero = zeroHead
        let one = oneHead
        let two = twoHead


        while (temp) {
            if (temp.data === 0) {
                zero.next = temp
                zero = zero.next
            } else if (temp.data === 1) {
                one.next = temp
                one = one.next
            } else {
                two.next = temp
                two = two.next
            }
            temp = temp.next
        }

        zero.next = oneHead.next ? oneHead.next : twoHead.next
        one.next = twoHead.next
        two.next = null

        this.head = zeroHead.next
        return this

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

a.add(0)
a.add(1)
a.add(0)
a.add(2)
a.add(0)
a.add(1)

a.printLL()
console.log('-----------------')
a.sort()

a.printLL()