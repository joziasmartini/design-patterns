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
console.log(personOne.fullName());
