import React from 'react'

const Form = ({handleNameChange, handleNumberChange, newName, newNumber, addPerson}) => {

    return (
        
        <form onSubmit={addPerson}>
            <div>
              name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
              number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form