//This file contains the first Technical round of finvasia interview
//Question 1. What is micro task queue
//Question 2. FInd the third highest element from an array
function check(a) {
    let first = 0
    let second = 0
    let third = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > first) {
            first = a[i]
        }
    }

    // console.log('first high', first)


    for (let i = 0; i < a.length; i++) {
        if (a[i] > second && a[i] < first) {
            second = a[i]
        }
    }
    // console.log('second', second)


    for (let i = 0; i < a.length; i++) {
        if (a[i] > third && a[i] < second && a[i] < first) {
            third = a[i]
        }
    }
    console.log('third', third)
}



let a = [10, 5, 8, 12, 12, 15]
check(a)

//Question 3. Find the third highest salary from a sql table
//Below is my answer

select max(emp.salary) from emp where 1 = 1 //third highst
and
    (
        (select max(emp.salary) from emp // Max 2
            where 1 = 1 and emp.salary not in (
                select max(emp.salary) from emp //max 1
            )
        ), (select max(emp.salary) from emp))





select max(emp.salary) from emp // Max 2
where 1 = 1 and emp.salary not in (
    select max(emp.salary) from emp //max 1
)

select max(emp.salary) from emp

// Question 4. Calculate the prime number from 1 to 10
//Below is my answer
function check(a) {
    for (let i = 2; i < a; i++) {
        let c = 0
        for (let j = 2; j < 9; j++) {
            if (i != j) {
                if (i % j == 0) {
                    c++
                    break
                }
            }
        }

        if (c == 0) {
            console.log(i)
        }
    }
}


check(20)

//Correct answer
function check(a) {
    for (let i = 2; i < a; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

//Question 5. Please let me know the how to optimize the database quires (only MySql).

//Question 6. How to prevent the DDOS attackes and how to make safe your application.

//Question 7. What is object frezz in nodejs