import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="container App">
      <main className="row wrapper">
        <WeatherApp defaultCity="São Paulo" />
      </main>
      <footer className="row d-flex justify-content-center">
        <small>
          This app was coded by JulietaZon and is <br />
          <span
            className="Link"
            onClick={() =>
              window.open(
                "https://github.com/julietazon/weather-react",
                "_blank"
              )
            }
          >
            Open Source
          </span>{" "}
          on{" "}
          <span
            className="Link"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            GitHub
          </span>{" "}
          ❣️
        </small>
      </footer>
    </div>
  );
}

export default App;
