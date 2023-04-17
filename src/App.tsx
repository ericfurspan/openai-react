import reactLogo from "./assets/react.svg";
import { askGpt } from "./api";
import "./App.css";

function App() {
  const chatWithGpt = async () => {
    let query = prompt("Start a converation with GPT...");

    while (query) {
      const response = await askGpt(query);
      if (!response) return;

      query = prompt(response);
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={chatWithGpt}>Chat with GPT</button>
      </div>
    </div>
  );
}

export default App;
