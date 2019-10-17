import React, { useState, useEffect } from 'react'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import Form from './components/Form'
import personService from './services/personService'
import NotificationSuccess from './components/NotificationSuccess'
import NotificationError from './components/NotificationError'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }



  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const checkPerson = (person) => person.name.toUpperCase() === newPerson.name.toUpperCase();

    if (persons.some(checkPerson)) {
      let id = persons.find(e => e.name === newPerson.name).id

      if (window.confirm(`${newPerson.name} is already in your phonebook. Would you like to assign a new number to it?`)) {
        personService
          .update(id, newPerson)
          .then(returnedPerson => {
            if (returnedPerson !== undefined) {
              setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
              setSuccessMessage(`${returnedPerson.name} was successfully updated!`)
              setTimeout(() => {
                setSuccessMessage(null)
              }, 5000)
              setNewName('');
              setNewNumber('');
            } else {
              setErrorMessage(`Person ${newPerson.name} was already removed from the server`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
              setPersons(persons.filter(e => e.id !== id))
              setNewName('');
              setNewNumber('');
            }
          })
          .catch(error => {
            console.log('error:', error)
            setErrorMessage(`Person ${newPerson.name} was already removed from the server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            //setPersons(persons.filter(e => e.id !== id))
            setNewName('');
            setNewNumber('');
          })
      } else {
        return null
      }
    } else {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setSuccessMessage(`${returnedPerson.name} was successfully added to Phonebook!`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setNewName('');
          setNewNumber('');
        })
    }

  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .deletePerson(person)
      let updatePersons = persons.filter(e => e.id !== person.id)
      setPersons(updatePersons)
      setSuccessMessage(`${person.name} was successfully erased from the Phonebook!`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <NotificationError errorMessage={errorMessage} />
      <NotificationSuccess successMessage={successMessage} />
      <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </div>
      <h2>Add new contact</h2>
      <Form
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <PersonsList filter={filter} persons={persons} deletePerson={deletePerson} />
    </div>
  )


}

export default App