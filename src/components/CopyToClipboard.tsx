import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import { ContentCopy as ContentCopyIcon } from "@mui/icons-material";

const CopyToClipboard = ({ content }: { content: string }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);

    navigator.clipboard.writeText(content);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="small">
        <ContentCopyIcon sx={{ fontSize: "1.25rem" }} />
      </IconButton>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyToClipboard;
