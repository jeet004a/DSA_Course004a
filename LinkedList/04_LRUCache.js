class block {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LRU {
    constructor() {
        this.head = null
        this.tail = null
    }

    //this funnction contains to check length
    lenCheck() {
        let current = this.head
        let c = 0
        while (current) {
            c = c + 1
            current = current.next
        }
        return c


    }

    add(data) {
        //If head is null
        if (!this.head) {
            let newNode = new block(data)
            this.head = newNode
            this.tail = newNode
            return
        }
        //if entered data is equal to head
        if (this.head.data == data) return

        //if entered data is equal to tail
        if (this.tail.data == data) {
            let current = this.head
            while (current.next.next) {
                current = current.next
            }

            let temp = current.next
            temp.next = this.head
            this.head = temp
            current.next = null
            this.tail = current
            return
        }

        //If entered data is not matched head or tail but find in between
        let current = this.head
        while (current.next) {
            if (current.next.next) {
                if (current.next.data == data) {
                    let temp = current.next
                    current.next = current.next.next
                    temp.next = this.head
                    this.head = temp
                    return
                }
            }
            current = current.next
        }

        //If fresh element entered then push it to front
        let newNode = new block(data)
        newNode.next = this.head
        this.head = newNode

        //If fresh element enterd and the capacity exceed then remove last and update the tail
        let c = this.lenCheck()
        if (c > 4) {
            let last = this.head
            while (last.next.next) {
                last = last.next
            }
            last.next = null
            this.tail = last
            return
        }

        return this.head
    }

    get() {
        let current = this.head

        while (current) {
            console.log('->', current.data)
            current = current.next
        }
        // console.log(this.tail.data)
    }
}


let a = new LRU()

a.add(10)
a.add(20)
a.add(30)
a.add(40)
    // a.add(30)
a.add(50)
a.add(30)
a.add(60)


a.get()