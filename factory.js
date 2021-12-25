function createPerson(firstName, secondName) {
  let person = {};
  person.firstName = firstName;
  person.secondName = secondName;
  person.fullName = fullName();

  function fullName() {
    return `${person.firstName} ${person.secondName}`;
  }

  return person;
}

const personOne = createPerson('John', 'Smith');
const personTwo = createPerson('Sarah', 'Smith');

// Returns 'John Smith' object
console.log(personOne);

// Returns 'Sarah Smith' object
console.log(personTwo);
