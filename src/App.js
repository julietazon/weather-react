import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <WeatherApp defaultCity="São Paulo" />
      </div>
    </div>
  );
}

export default App;
