import React from 'react'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter shown: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter