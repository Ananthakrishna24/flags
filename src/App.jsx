import React, { useState, useEffect } from "react";
import axios from "axios";
import Flags from "./Flags";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sortedCountries = response.data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
        setFilteredCountries(sortedCountries);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch countries data:", err);
        setError("Failed to fetch countries data");
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filtered);
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded-md mb-4"
      />
      <div className="flex flex-wrap justify-center gap-4">
        {filteredCountries.map((country) => (
          <Flags 
            key={country.cca3}
            name={country.name.common}
            flag={country.flags.png}
          />
        ))}
      </div>
    </div>
  );
}

export default App;