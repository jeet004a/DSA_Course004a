// Question number 1
// Guess the output

let temp1 = {
    name: 'sample',
    contacts: []
}


function createPerson(data, name) {
    data.name = name
    return data
}

function addContract(data, type, value) {
    data.contacts.push({
        type: type,
        value: value
    })
}

let a = createPerson(temp1, 'Ram')
addContract(a, 'Phone', '111111')

let b = createPerson(temp1, 'Sham')
addContract(b, 'Phone', '2222222')


console.log(a, b)
    /*
    This is the concept of deep copy and shellow copy
    {
      name: 'Sham',
      contacts: [
        { type: 'Phone', value: '111111' },
        { type: 'Phone', value: '2222222' }
      ]
    } {
      name: 'Sham',
      contacts: [
        { type: 'Phone', value: '111111' },
        { type: 'Phone', value: '2222222' }
      ]
    }
      */

// Q2. What is micro service.

// Q3. What are api gateways

// Q4. How to handle production issues

// Q5. Exaplin current project where i used micorservice and explain the services work