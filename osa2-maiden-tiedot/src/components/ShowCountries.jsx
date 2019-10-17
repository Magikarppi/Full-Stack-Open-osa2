import React from 'react'
import SingleCountry from './SingleCountry'

const ShowCountries = ({ data, handleShowCountry }) => {
    const singleCountry = data.length === 1
    let manyCountries = data.length > 1 && data.length < 10;
    let tooManyCountries = data.length > 9 && data.length < 240

    return (
        
        <div>
            {
                singleCountry
                    ?  <SingleCountry data={data} />
                    : null
            }
            {
                manyCountries
                    ? data.map((e) => {
                        return (
                        <div key={`${e.name}_${e.capital}`}>
                         {e.name}

                        <button onClick={() => handleShowCountry(e)}>Show</button>
                        </div>
                        )
                    })
                    : null
            }
            {
                tooManyCountries
                    ? <p>too many countries to show. Provide more specific filter.</p>
                    : null
            }
        </div>
    )
}

export default ShowCountries