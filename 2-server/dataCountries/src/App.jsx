import { useState, useEffect } from "react";
import axios from "axios";

import Country from "./Country";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((response) => {
          setCountries(
            response.data.filter((obj) =>
              obj.name.common.toLowerCase().includes(query)
            )
          );
        });
    }
  }, [query]);

  return (
    <div>
      <p>Find countries:</p>
      <input value={query} onChange={handleQuery} />
      <div>
        {countries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : countries.length > 1 ? (
          countries.map((c) => <p key={c.name.common}>{c.name.common}</p>)
        ) : (
          <Country countries={countries} />
        )}
      </div>
    </div>
  );
};

export default App;
