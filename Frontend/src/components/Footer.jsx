// src/components/Footer.jsx
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
  Stack,
  IconButton,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#1b5e20', color: 'white', pt: 6, pb: 4 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Grid container spacing={4}>
          {/* Logo & Description */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <img
                src="/images/logo.jpeg"
                alt="KRM Logo"
                style={{ height: 50, width: 50, objectFit: 'contain', borderRadius: '8px' }}
              />
              <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: 22 }}>
                KRM Landscape
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: '#c8e6c9', fontSize: 16 }}>
              We specialize in innovative landscape design, development, and maintenance — bringing nature closer to modern spaces.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h4" sx={{ fontFamily: 'Georgia, serif', mb: 2, fontSize: 18 }}>
              Quick Links
            </Typography>
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((label, index) => (
              <MuiLink
                key={label}
                component={Link}
                to={['/', '/about', '/services', '/gallery', '/contact'][index]}
                underline="none"
                color="inherit"
                sx={{
                  display: 'block',
                  mb: 1,
                  color: '#e8f5e9',
                  fontSize: 18,
                  '&:hover': { color: '#a5d6a7' }
                }}
              >
                {label}
              </MuiLink>
            ))}
          </Grid>

          {/* Services */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h4" sx={{ fontFamily: 'Georgia, serif', mb: 2, fontSize: 18 }}>
              Services
            </Typography>
            {['Landscape Design', 'Installation', 'Maintenance', 'Hardscape', 'Green Wall'].map((item, i) => (
              <Typography key={i} variant="body1" sx={{ mb: 1, color: '#c8e6c9', fontSize: 18 }}>
                • {item}
              </Typography>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h4" sx={{ fontFamily: 'Georgia, serif', mb: 2, fontSize: 18 }}>
              Contact
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <LocationOnIcon sx={{ color: '#a5d6a7' }} />
              <Typography variant="body1" sx={{ color: '#c8e6c9', fontSize: 15 }}>
                123 Green Avenue, Mumbai, MH 400086
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <PhoneIcon sx={{ color: '#a5d6a7' }} />
              <Typography variant="body1" sx={{ color: '#c8e6c9', fontSize: 15 }}>
                +91 9307068889 /+91 97305 66577 /+91 94210 33554
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon sx={{ color: '#a5d6a7' }} />
              <Typography variant="body1" sx={{ color: '#c8e6c9', fontSize: 15 }}>
                krmlandscape@gmail.com
              </Typography>
            </Stack>

            {/* Social Icons */}
            <Stack direction="row" spacing={1} mt={2}>
              <IconButton sx={{ color: '#a5d6a7' }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: '#a5d6a7' }}><InstagramIcon /></IconButton>
              <IconButton sx={{ color: '#a5d6a7' }}><LinkedInIcon /></IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#66bb6a' }} />

        {/* Bottom Section */}
        <Box textAlign="center">
          <Typography variant="body2" sx={{ color: '#c8e6c9', fontSize: 14 }}>
            © {new Date().getFullYear()} KRM Landscape. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#c8e6c9', fontSize: 14 }}>
            Designed by{' '}
            <MuiLink
              href="https://yourdesignerwebsite.com"
              target="_blank"
              underline="hover"
              sx={{ color: '#a5d6a7' }}
            >
              YourDesignStudio
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
