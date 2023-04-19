import { ChangeEvent, useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import {
  Container,
  Stack,
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
  Skeleton,
} from "@mui/material";
import ChatFeed from "./components/ChatFeed";
import { askGpt } from "./api/openai";

const App = () => {
  const [chatHistory, setChatHistory] = useState<ChatCompletionRequestMessage[] | null>(null);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      setLoading(true);

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
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
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

      {loading ? (
        <Box>
          <Skeleton height={56} width="100%" />
          <Skeleton height={72} width="100%" />
          <Skeleton height={56} width="100%" />
        </Box>
      ) : (
        chatHistory && <ChatFeed messages={chatHistory} />
      )}

      <Stack
        alignItems="flex-start"
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
          fullWidth
          multiline
          value={userMessage}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setUserMessage(event.target.value)}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </Container>
  );
};

export default App;
