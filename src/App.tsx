import { askGpt } from "./api/openai";

function App() {
  const chatWithGpt = async () => {
    let query = prompt("Start a converation with OpenAI's GPT...");

    while (query) {
      const response = await askGpt(query);
      if (!response) return;

      query = prompt(response);
    }
  };

  return (
    <div>
      <h1>openai-react</h1>

      <div>
        <button onClick={chatWithGpt}>Chat with GPT</button>
      </div>
    </div>
  );
}

export default App;
