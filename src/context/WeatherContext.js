import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [query, setQuery] = useState("Columbia");
  const [weather, setWeather] = useState({});

  return (
    <WeatherContext.Provider value={{ query, setQuery, weather, setWeather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
