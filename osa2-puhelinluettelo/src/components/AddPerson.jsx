import React from 'react'
import Form from './Form'
import axios from 'axios'

const AddPerson = ({ handleNameChange, handleNumberChange, setNewName, setNewNumber, persons, newName, newNumber }) => {
  e.preventDefault()
  const newPerson = {
    name: newName,
    number: newNumber
  }

  const checkPerson = (person) => person.name.toUpperCase() === newPerson.name.toUpperCase()

  persons.some(checkPerson) ?
    alert(`${newPerson.name} is already in your phonebook`)
    :
    axios
      .post("http://localhost:3001/persons", newPerson)
      // .then(response => {
      //   console.log('response', response)
      //   setPersons(persons.concat(response.data))
      // })

  setNewName('')
  setNewNumber('')

  return (
    <div>
      <Form
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        persons={persons}
      />
    </div>
  )
}

export default AddPerson