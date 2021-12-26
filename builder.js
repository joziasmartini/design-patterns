class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class Person {
  constructor(name, { age, phone = '123-456-7890', address } = {}) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

let personOne = new Person('John', { address: new Address('12345', 'Main St.') })
console.log(personOne)
