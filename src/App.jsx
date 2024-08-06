import React, { useState, useEffect } from "react";
import axios from "axios";
import Flags from "./Flags";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://xcountries-backend.azurewebsites.net/all");
        setCountries(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch countries data");
        console.error("Failed to fetch countries data", err)
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Countries and Flags</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {countries.map((country) => (
          <Flags 
            key={country.abbr}
            name={country.name}
            flag={country.flag}
            abbr={country.abbr}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
