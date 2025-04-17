"use client";

import type React from "react";
import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { Close, Send } from "@mui/icons-material";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsLoading(true);
    fetch(`http://localhost:4000/api/sendmessage`, {
      body: JSON.stringify({
        ...formData,
        // token: localStorage.getItem("token"),
        scope: "club",
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_CLIENT_CLUB_SECRET}`,
      },
    })
      .then((res) => {
        console.log(res.json());
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="contact-modal-title"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "90%", sm: "450px" },
          bgcolor: "rgba(29, 29, 29, 0.95)",
          borderRadius: "4px",
          p: 4,
          outline: "none",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "4px",
            padding: "2px",
            background: "linear-gradient(45deg, transparent 50%, #FF1083 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "white",
            "&:hover": {
              color: "#FF1083",
            },
          }}
        >
          <Close />
        </IconButton>

        <Typography
          id="contact-modal-title"
          variant="h5"
          component="h2"
          sx={{
            color: "#FF1083",
            fontWeight: "700",
            mb: 3,
            textShadow: "0px 0px 12px #FF1083",
            letterSpacing: "0.05em",
          }}
        >
          CONTACT US
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(255, 255, 255, 0.3)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#FF1083",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FF1083",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />

            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(255, 255, 255, 0.3)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#FF1083",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FF1083",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />

            <TextField
              fullWidth
              name="message"
              label="Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(255, 255, 255, 0.3)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#FF1083",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FF1083",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<Send />}
              sx={{
                mt: 2,
                bgcolor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                color: "white",
                backdropFilter: "blur(5px)",
                "&:hover": {
                  bgcolor: "rgba(255, 16, 131, 0.1)",
                  borderColor: "#FF1083",
                },
              }}
            >
              SEND MESSAGE
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default ContactModal;
