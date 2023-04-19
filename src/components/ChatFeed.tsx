import { ChatCompletionRequestMessage } from "openai";
import { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
  Box,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import { Assistant as AssistantIcon, Psychology as PsychologyIcon } from "@mui/icons-material";
import CopyToClipboard from "./CopyToClipboard";

const ChatFeed = ({ messages }: { messages: ChatCompletionRequestMessage[] }) => {
  return (
    <List>
      {messages?.map((message) => (
        <Fragment key={message.content}>
          <Stack direction="row" alignItems="flex-start" component={ListItem}>
            <ListItemAvatar>
              {message.role === "user" && <Avatar />}
              {message.role === "assistant" && (
                <Avatar sx={{ bgcolor: "info.main" }}>
                  <AssistantIcon />
                </Avatar>
              )}
            </ListItemAvatar>

            <ListItemText primary={message.content} />

            <CopyToClipboard message={message.content} />
          </Stack>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}

      {/* <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.light" }}>
            <PsychologyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
      </ListItem> */}

      {/* <Divider variant="inset" component="li" /> */}

      {/* <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Summer BBQ" />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.light" }}>
            <PsychologyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </>
          }
        />
      </ListItem> */}
    </List>
  );
};

export default ChatFeed;
