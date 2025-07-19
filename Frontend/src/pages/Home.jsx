import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Container,
  Paper,
  AppBar,useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import { Spa, Forest, Grass } from "@mui/icons-material";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

const slides = [
  {
    image: "/images/bg.jpg",
    title: "Sustainable Green Solutions",
    subtitle: "Our eco-friendly designs ensure long-lasting, thriving environments.",
  },
  {
    image: "/images/bg1.jpg",
    title: "Crafting Natural Masterpieces",
    subtitle: "We blend creativity and nature to design breathtaking outdoor spaces.",
  },
  {
    image: "/images/bg2.jpg",
    title: "From Vision to Verdant Reality",
    subtitle: "Transforming spaces through thoughtful landscape architecture.",
  },
  {
    image: "/images/bg3.webp",
    title: "Grow with KRM Landscape",
    subtitle: "Where every garden tells a story of care and elegance.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <AppBar position="fixed" elevation={6} sx={{ backgroundColor: "#2e7d32" }}>
        <Navbar />
      </AppBar>

      <Box className="hero-section" style={{ backgroundImage: `url(${slides[current].image})` , position: "relative"}}>
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: isMobile ? 10 : 30,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            width: isMobile ? 44 : 60,
            height: isMobile ? 44 : 60,
            '&:hover': {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              transform: "translateY(-50%) scale(1.1)",
            },
            zIndex: 10,
          }}
        >
          <ArrowCircleLeftSharpIcon sx={{ fontSize: isMobile ? 26 : 32 }}/>
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: isMobile ? 10 : 30,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            width: isMobile ? 44 : 60,
            height: isMobile ? 44 : 60,
            '&:hover': {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              transform: "translateY(-50%) scale(1.1)",
            },
            zIndex: 10,
          }}
        >
          <ArrowCircleRightSharpIcon sx={{ fontSize: isMobile ? 26 : 32 }}/>
        </IconButton>

        
        <Box className="hero-text">
          <Typography variant="h3" className="hero-title">
            {slides[current].title}
          </Typography>
          <Typography variant="h6" className="hero-subtitle">
            {slides[current].subtitle}
          </Typography>
        </Box>
      </Box>

      <Box className="section soft-bg">
        <Container>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Our Approach to Green Living
          </Typography>
          <Typography align="center" paragraph>
            At KRM Landscape, we cultivate immersive environments where nature meets sophistication.
            From design to maintenance, our end-to-end services include native species planning,
            resource-efficient layouts, seasonal flora management, and sustainable water systems.
          </Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4} mt={4} justifyContent="center">
            <Paper className="info-card">
              <Spa fontSize="large" color="success" />
              <Typography variant="h6" fontWeight="bold" mt={2}>
                Eco-Conscious Planning
              </Typography>
              <Typography>
                Smart irrigation, natural materials, and low-impact layouts are core to our philosophy.
              </Typography>
            </Paper>
            <Paper className="info-card">
              <Forest fontSize="large" color="success" />
              <Typography variant="h6" fontWeight="bold" mt={2}>
                Nature-Centric Designs
              </Typography>
              <Typography>
                Native plants, pollinator gardens, and climate-aware strategies drive our designs.
              </Typography>
            </Paper>
            <Paper className="info-card">
              <Grass fontSize="large" color="success" />
              <Typography variant="h6" fontWeight="bold" mt={2}>
                Harmonious Growth
              </Typography>
              <Typography>
                Landscapes that flourish seasonally and sustainably with expert care programs.
              </Typography>
            </Paper>
          </Stack>
        </Container>
      </Box>

      <Box className="section fade-bg">
        <Container>
          <Paper elevation={6} className="krm-intro">
            <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
              <Box
                component="img"
                src="/images/logo.jpeg"
                alt="KRM Logo"
                className="krm-logo"
              />
              <Box>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  We Are KRM Landscape
                </Typography>
                <Typography paragraph>
                  With passion rooted in nature and a commitment to craft, KRM Landscape offers tailored,
                  sustainable, and visually striking solutions. Our holistic approach ensures every landscape
                  thrives in harmony with its surroundings.
                </Typography>
                <Typography variant="h6" color="green" fontStyle="italic">
                  "Creating Iconic Landscapes for the Nation’s Future."
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;



