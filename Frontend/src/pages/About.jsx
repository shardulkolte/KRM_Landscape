// src/pages/About.jsx
import {
  Box,
  Typography,
  Container,
  AppBar,
  Paper,
  Stack,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Spa,
  Forest,
  EmojiObjects,
  Engineering,
  StarRate,
  Nature,
  Architecture,
  Landscape,
  Group,
  Grass,
} from "@mui/icons-material";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import "../styles/About.css";

const About = () => {
  return (
    <Box className="about-root">
      <AppBar position="fixed" elevation={6} sx={{ backgroundColor: "#2e7d32" }}>
        <Navbar />
      </AppBar>

      <Box className="about-main">
        <Box className="about-hero">
          <Typography variant="h3" className="hero-title">
            Welcome to <span className="highlight">KRM Landscape</span>
          </Typography>
          <Typography variant="h6" className="hero-subtitle">
            Creating sustainable outdoor spaces with beauty and purpose.
          </Typography>
          <Typography className="hero-description">
            From elegant gardens to functional landscapes, we design, build, and maintain green environments that thrive. Discover how nature and craftsmanship come together.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center">
            <Button component={Link} to="/services" variant="contained" className="btn-primary">
              Our Services
            </Button>
            <Button component={Link} to="/contact" variant="outlined" className="btn-secondary">
              Get in Touch
            </Button>
          </Stack>
        </Box>
      </Box>


      {/* WHo we are section */}

      <Container maxWidth="lg">
        {/* <Container disableGutters maxWidth={false}> */}
        <Box className="about-section">
          <Typography variant="h4" className="section-heading">
            Who We Are
          </Typography>
          <Typography className="section-text">
            KRM Landscape is a visionary firm committed to blending environmental awareness with artistic landscaping. Our work is rooted in sustainability, creativity, and purpose-driven execution.
          </Typography>

          <Paper elevation={3} className="quote-box">
            <Typography variant="h6" className="quote-text">
              "To inspire and shape environments where nature thrives in harmony with human experiences."
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* Our Mission, Vision & Goal section */}

      <Typography variant="h4" className="section-heading-2">
        Our Mission, Vision & Goal
      </Typography>
      <Grid container spacing={2} mt={2} mb={6} justifyContent="center">
        {[{
          title: "Our Mission",
          icon: <Forest fontSize="large" color="success" />,
          desc: "To build landscapes that breathe life into spaces while respecting nature’s balance."
        }, {
          title: "Our Vision",
          icon: <EmojiObjects fontSize="large" color="success" />,
          desc: "To be a national leader in green innovation and nature-first designs."
        }, {
          title: "Our Goal",
          icon: <Engineering fontSize="large" color="success" />,
          desc: "To deliver reliable, creative, and cost-effective landscaping solutions to every client."
        }].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="inline" justifyContent="center">
            <Paper elevation={4} className="info-card" sx={{ width: "100%", maxWidth: 300, textAlign: "center", p: 3 }}>
              {item.icon}
              <Typography variant="h6" fontWeight="bold" mt={2}>{item.title}</Typography>
              <Typography variant="body2">{item.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Our core values section */}


      {/* <Typography variant="h4" className="section-heading">
        Our Core Values
      </Typography>
      <Grid container spacing={3} mt={2} mb={6} justifyContent="center">
        {["Sustainability 🌍", "Creativity 🎨", "Client-Centric 🤝", "Craftsmanship 🛠️", "Innovation 🚀"].map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
            <Card elevation={3} className="value-card" sx={{ width: "100%", maxWidth: 280 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}



      {/* what we do and why to choose us section */}

      <Typography variant="h4" className="section-heading">
        What We Do & Why Choose Us
      </Typography>
      <Grid container spacing={4} mt={2} mb={4} justifyContent="center">
        {[{
          title: "Personalized Designs",
          desc: "Each project is custom-built to reflect your personality and needs."
        }, {
          title: "Affordable Pricing",
          desc: "Cost-effective solutions that don’t compromise quality."
        }, {
          title: "Skilled Professionals",
          desc: "Experienced horticulturists and designers on every project."
        }, {
          title: "Timely Project Delivery",
          desc: "On-time execution with transparent milestones."
        }].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
            <Paper elevation={4} className="why-card" sx={{ width: "100%", maxWidth: 280, textAlign: "center", p: 2 }}>
              <StarRate fontSize="large" color="success" />
              <Typography variant="h6" fontWeight="bold" mt={2}>{item.title}</Typography>
              <Typography variant="body2">{item.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>






      <ContactUs />
    </Box>
  );
};

export default About;
