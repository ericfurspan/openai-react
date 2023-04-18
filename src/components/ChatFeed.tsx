// import { useState, useRef, useEffect } from "react";
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
} from "@mui/material";
import { Psychology as PsychologyIcon } from "@mui/icons-material";

const ChatFeed = ({ feedItems }: { feedItems: string[] }) => {
  return (
    <List>
      {feedItems?.map((item) => (
        <Fragment key={item}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.light" }}>
                <PsychologyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item} />
          </ListItem>
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
