import React from "react";
import { Box, IconButton, Modal as MuiModal, Stack, Theme, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalStyle = (theme: Theme) => ({
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: theme.breakpoints.values.md,
  maxHeight: "100vh",
  overflowY: "auto",
  backgroundColor: "background.paper",
  borderRadius: "4px",
  padding: theme.spacing(3),
});

const CloseBtnStyle = (theme: Theme) => ({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  color: theme.palette.grey[500],
});

type ModalProps = {
  isOpen: boolean;
  handleClose: VoidFunction;
  modalId: string;
  modalTitle: string;
  modalSubtitle?: string;
  children: React.ReactNode;
};

const Modal = ({
  isOpen,
  handleClose,
  modalId,
  modalTitle,
  modalSubtitle,
  children,
}: ModalProps) => {
  const modalTitleId = `${modalId}-title`;
  const modalContentId = `${modalId}-description`;

  return (
    <MuiModal
      role="dialog"
      aria-labelledby={modalTitleId}
      aria-describedby={modalContentId}
      open={isOpen}
      onClose={handleClose}
      data-testid={modalId}
    >
      <Stack direction="column" sx={ModalStyle} spacing={3}>
        <Box>
          <IconButton sx={CloseBtnStyle} onClick={handleClose} aria-label="Close modal">
            <CloseIcon />
          </IconButton>

          <Stack direction="column" spacing={2} mr={3}>
            <Typography variant="h5" component="h2" id={modalTitleId}>
              {modalTitle}
            </Typography>

            {modalSubtitle && <Typography variant="body2">{modalSubtitle}</Typography>}
          </Stack>
        </Box>

        <Stack id={modalContentId}>{children}</Stack>
      </Stack>
    </MuiModal>
  );
};

export default Modal;
