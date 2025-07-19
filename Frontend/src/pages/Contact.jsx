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

const Contact = () => {
  return (
    <Box>
      <AppBar position="fixed" elevation={6} sx={{ backgroundColor: "#2e7d32" }}>
        <Navbar />
      </AppBar>

      <Box className="contact-section">
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>

          <Box className="contact-cards">
            <Card elevation={6} className="contact-card">
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Visit Us
                </Typography>
                <Typography>
                  KRM Landscape Pvt. Ltd.<br />123 Greenway Avenue,<br />Pune, Maharashtra, India
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={6} className="contact-card">
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Get In Touch
                </Typography>
                <Typography>
                  Phone: +91 98765 43210<br />
                  Email: contact@krmlandscape.com<br />
                  Hours: Mon–Sat, 9am – 6pm
                </Typography>
              </CardContent>
            </Card>

            {/* Add more cards here if needed */}
          </Box>
        </Container>
      </Box>

    </Box>
  );
};

export default Contact;






