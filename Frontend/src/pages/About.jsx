// src/pages/About.jsx
import {
  Box,
  Typography,
  Container,
  AppBar,
  Card,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import "../styles/About.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



const About = () => {
  

  return (
    <Box sx={{ mt: { xs: '80px', sm: '100px' } }}>
      <AppBar position="fixed" elevation={6} sx={{ backgroundColor: "#2e7d32" }}>
        <Navbar />
      </AppBar>

      <Box
    sx={{
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      p: { xs: 3, sm: 4, md: 6 },
      borderRadius: "20px",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
      maxWidth: "800px",
      textAlign: "center",
      width: "100%",
      margin: "0 auto",
    }}
  >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            color: "#ffffff",
            textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
          }}
        >
          Welcome to <span style={{ color: "#a5d6a7" }}>KRM Landscape</span>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#e0f2f1",
            mb: 3,
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          Creating sustainable outdoor spaces with beauty and purpose.
        </Typography>

        <Typography
          sx={{
            color: "#f1f8e9",
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.6,
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          From elegant gardens to functional landscapes, we design, build, and maintain green environments that thrive. Discover how nature and craftsmanship come together.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            component={Link}
            to="/services"
            variant="contained"
            sx={{
              backgroundColor: "#66bb6a",
              color: "#fff",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Our Services
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{
              borderColor: "#a5d6a7",
              color: "#a5d6a7",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "rgba(165, 214, 167, 0.1)",
                borderColor: "#66bb6a",
                color: "#66bb6a",
              },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Get in Touch
          </Button>
        </Stack>
      </Box>

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

export default About;






