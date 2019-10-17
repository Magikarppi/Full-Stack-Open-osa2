import React from 'react'

const PersonsList = ({ filter, persons, deletePerson }) => {
  const filteredNames = []
  persons.map(function (e) {
    if (e.name.toUpperCase().includes(filter.toUpperCase())) {
      filteredNames.push(e)
    }
    return null
  })

  return (
    (filter) ?
      <div>
        <ul>
          {filteredNames.map((e) => {
            return (
              <div key={e.id}>
                <li>{e.name} - {e.number}</li>
                <button onClick={() => deletePerson(e)}>Delete</button>
              </div>
            )
          })
          }
        </ul>
      </div>
      :
      <div>
        <ul>
          {persons.map((e) => {
            return (
              <div key={e.id}>
                <li >{e.name} - {e.number}</li>
                <button onClick={() => deletePerson(e)}>Delete</button>
              </div>
            )
          })
          }
        </ul>
      </div>
  )
}

export default PersonsList