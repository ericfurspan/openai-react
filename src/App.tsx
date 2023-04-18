import { ChangeEvent, useState } from "react";
import { Container, Stack, Typography, AppBar, Toolbar, TextField, Button } from "@mui/material";
import ChatFeed from "./components/ChatFeed";
import { askGpt } from "./api/openai";
import promptSamples from "./assets/prompts.json";

const App = () => {
  const [chatHistory, setChatHistory] = useState<string[] | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (message) {
      const response = await askGpt(message, chatHistory);

      if (response) {
        const newHistory = chatHistory ? [...chatHistory, message, response] : [message, response];

        setChatHistory(newHistory);
        setMessage("");
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ p: 4 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            ChatGPT Client
          </Typography>
        </Toolbar>
      </AppBar>

      {chatHistory && <ChatFeed feedItems={chatHistory} />}

      <Stack
        alignItems="flex-end"
        paddingTop={2}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="message"
          label="Message to ChatGPT"
          variant="outlined"
          minRows={2}
          multiline
          sx={{ width: 325 }}
          value={message}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </Container>
  );
};

export default App;
