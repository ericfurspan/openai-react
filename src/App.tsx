import { ChangeEvent, useState } from "react";
import {
  Fab,
  Grid,
  Box,
  Container,
  Stack,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  TextField,
  Button,
} from "@mui/material";
import ChatFeed from "./components/ChatFeed";
import { askGpt } from "./api/openai";

const App = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<string[]>([""]);
  const [message, setMessage] = useState("");

  const handleStartChat = () => {
    setChatOpen(true);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (message) {
      const response = await askGpt(message);

      if (response) {
        if (!chatHistory) setChatHistory(() => [message, response]);
        else setChatHistory((prev) => [...prev, message, response]);

        setMessage("");
      }
    }
  };

  console.log("chatHistory", chatHistory);

  return (
    <Container maxWidth="xl" sx={{ p: 4 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            ChatGPT Client
          </Typography>

          <Button variant="contained" onClick={handleStartChat}>
            Start Chat
          </Button>
        </Toolbar>
      </AppBar>

      {chatHistory.length > 1 && <ChatFeed feedItems={chatHistory} />}

      <Stack
        alignItems="flex-end"
        paddingTop={2}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="user-message"
          label="Send a message"
          variant="outlined"
          sx={{ minWidth: 300 }}
          value={message}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </Container>
  );
};

export default App;
