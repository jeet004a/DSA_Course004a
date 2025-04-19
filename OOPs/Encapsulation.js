class BankAccount {

    constructor(initialBalance) {
        this.balance = initialBalance
    }

    deposite(amount) {
        this.balance += amount
    }

    getBalance() {
        return this.balance
    }

    abc() {
        console.log('ABC')
    }

}


let account = new BankAccount(1000)

account.deposite(2000)

console.log(account.getBalance())