import { ChangeEvent, useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { Container, Stack, Typography, AppBar, Toolbar, TextField, Button } from "@mui/material";
import ChatFeed from "./components/ChatFeed";
import { askGpt } from "./api/openai";

const App = () => {
  const [chatHistory, setChatHistory] = useState<ChatCompletionRequestMessage[] | null>(null);
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let messages: ChatCompletionRequestMessage[] = [];

    if (!chatHistory) {
      messages = [{ role: "user", content: userMessage }];
    } else {
      messages = [...chatHistory, { role: "user", content: userMessage }];
    }

    const response = await askGpt(userMessage, messages);

    if (response) {
      const { role, content } = response;

      setChatHistory([...messages, { role, content }]);
      setUserMessage("");
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
          id="userMessage"
          label="Message to ChatGPT"
          variant="outlined"
          minRows={2}
          multiline
          sx={{ width: 325 }}
          value={userMessage}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setUserMessage(event.target.value)}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </Container>
  );
};

export default App;
