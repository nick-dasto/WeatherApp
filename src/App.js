import React from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div
        className={
          // typeof weather.weather != "undefined"
          //   ? weather.weather[0].main === "Rain"
          //     ? "app rain"
          //     : weather.weather[0].main === "Clear"
          //     ? "app clear"
          //     : weather.weather[0].main === "Clouds"
          //     ? "app cloudy"
          //     : weather.weather[0].main === "Snow"
          //     ? "app snow"
          //     : "app"
          //   :
          "app"
        }
      >
        <main>
          <Search />
          <CurrentWeather />
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
