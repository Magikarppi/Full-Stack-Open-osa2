import React, { useState, useEffect} from 'react';
import axios from 'axios'
import ShowCountries from './components/ShowCountries'


function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const source = axios.CancelToken.source();

    const loadData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all",
          { cancelToken: source.token }
        );
        const result = response.data.filter(e => {
          return e.name.toUpperCase().includes(searchTerm.toUpperCase());
        });
        setData(result);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('request cancelled')
        } else {
          throw error;
        }
      }
    };

    loadData()

    return () => {
      source.cancel()
    }
  }, [searchTerm]);

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleShowCountry = e => {
    setData([e]);
  };

  return (
    <div>
      <div>
        Find countries:{" "}
        <input type="text" value={searchTerm} onChange={handleInputChange} />
      </div>
      <div>
        <ShowCountries data={data} handleShowCountry={handleShowCountry} />
      </div>
    </div>
  );
}

export default App;
