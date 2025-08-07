// src/pages/About.jsx
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,

} from "@mui/material";
import "../styles/Contact.css";


const ContactUs=()=>{
    return (
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
                  Phone: +91 9307068889 /+91 97305 66577 <br />
                  /+91 94210 33554<br />
                  Email: krmlandscape@gmail.com<br />
                  Hours: Mon–Sat, 9am – 6pm
                </Typography>
              </CardContent>
            </Card>

            {/* Add more cards here if needed */}
          </Box>
        </Container>
      </Box>
    );
};

export default ContactUs;