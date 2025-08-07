// src/pages/About.jsx
import {
  Box,
  Typography,
  Container,
  AppBar,
  Card,
  CardContent,
} from "@mui/material";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <Box>
      <AppBar position="fixed" elevation={6} sx={{ backgroundColor: "#2e7d32" }}>
        <Navbar />
      </AppBar>

      <ContactUs />

    </Box>
  );
};

export default Contact;






