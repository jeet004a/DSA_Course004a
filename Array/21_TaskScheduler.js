//Q. Run task based on bath process like if limit set to 2 then every batch return at a 2 result at a time
class TaskScheduler {
    constructor(limit) {
        this.limit = limit
        this.c = 0
        this.queue = []
    }

    genNextTask() {
        if (this.c < this.limit && this.queue.length > 0) {
            const nextTask = this.queue.shift()
            nextTask()
        }
    }

    addTask(task) {
        return new Promise((resolve, reject) => {
            async function __task() {
                // console.log(this.limit)
                this.c += 1
                try {
                    let res = await task()
                    console.log(res)

                    resolve('Resolve')
                } catch (error) {
                    console.log('Rejected')
                } finally {
                    // console.log(this.c)
                    this.c -= 1
                    this.genNextTask()
                }
            }

            if (this.c < this.limit) {
                __task.call(this)
            } else {
                this.queue.push(__task.bind(this))
            }
        })
    }
}


let scheduler = new TaskScheduler(3)

scheduler.addTask(() => new Promise((res) => setTimeout(() => res('Task1'), 2000)))
scheduler.addTask(() => new Promise((res) => setTimeout(() => res('Task2'), 2000)))
scheduler.addTask(() => new Promise((res) => setTimeout(() => res('Task3'), 2000)))
scheduler.addTask(() => new Promise((res) => setTimeout(() => res('Task4'), 2000)))
scheduler.addTask(() => new Promise((res) => setTimeout(() => res('Task5'), 2000)))
scheduler.addTask(() => new Promise((res) => setTimeout(() => res('Task6'), 2000)))
scheduler.addTask(() => new Promise((res) => setTimeout(() => res('Task7'), 2000)))
scheduler.addTask(() => new Promise((res) => setTimeout(() => res('Task8'), 2000)))
    // scheduler.addTask()