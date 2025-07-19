// src/components/Navbar.jsx
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                KRM Landscape
            </Typography>
            <List>
                {navLinks.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            sx={{ textAlign: 'center', py: 1.5 }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box position="sticky" sx={{ width: '100%', overflowX: 'hidden' }}>
                <AppBar
                    component="nav"
                    position="fixed"
                    elevation={6}
                    sx={{
                        backgroundColor: '#2e7d32',
                        height: { xs: '70px', sm: '90px' },
                        justifyContent: 'center',
                        px: { xs: 2, sm: 4 },
                        width: '100%',
                    }}
                >
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '1400px',
                            mx: 'auto',
                            boxSizing: 'border-box',
                        }}
                    >
                        {/* Logo + Brand Name */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                component="img"
                                src="/images/logo.jpeg" // adjust path as needed
                                alt="KRM Logo"
                                sx={{
                                    height: { xs: 48, sm: 64 },
                                    width: { xs: 48, sm: 64 },
                                    borderRadius: '50%',
                                    mr: 2,
                                }}
                            />
                            <Typography
                                variant="h5"
                                component={Link}
                                to="/"
                                sx={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontFamily: 'Georgia, serif',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.3rem', sm: '1.8rem' },
                                }}
                            >
                                KRM Landscape
                            </Typography>
                        </Box>

                        {/* Desktop Nav Buttons */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                            {navLinks.map((item) => (
                                <Button
                                    key={item.title}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        '&:hover': { color: '#c8e6c9' },
                                    }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>

                        {/* Mobile Hamburger Icon */}
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon sx={{ fontSize: 32 }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Drawer for mobile */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 240,
                        backgroundColor: '#e8f5e9',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
