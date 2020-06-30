import React, { useEffect, useContext } from "react";
import { api } from "../context/Config";
import { WeatherContext } from "../context/WeatherContext";

function Search() {
  const { query, setQuery } = useContext(WeatherContext);
  const { setWeather } = useContext(WeatherContext);

  const getWeather = () => {
    fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={(evt) => {
          if (evt.key === "Enter") {
            getWeather();
          }
        }}
      />
    </div>
  );
}

export default Search;
