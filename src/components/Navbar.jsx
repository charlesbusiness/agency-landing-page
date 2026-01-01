import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Stack,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const MotionAppBar = motion(AppBar);

const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <MotionAppBar
                position="sticky"
                elevation={0}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                    backgroundColor: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(12px)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                        {/* Brand */}
                        <Typography
                            variant="h6"
                            fontWeight={700}
                            component={RouterLink}
                            to="/"
                            sx={{ textDecoration: "none", color: "inherit" }}
                        >
                            BizGrowthLab
                        </Typography>

                        {/* Desktop Nav */}
                        <Stack
                            direction="row"
                            spacing={3}
                            alignItems="center"
                            sx={{ display: { xs: "none", md: "flex" } }}
                        >
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;

                                return (
                                    <Button
                                        key={item.label}
                                        component={RouterLink}
                                        to={item.path}
                                        color="inherit"
                                        sx={{
                                            opacity: isActive ? 1 : 0.75,
                                            fontWeight: isActive ? 600 : 400,
                                            borderBottom: isActive
                                                ? "2px solid #38bdf8"
                                                : "2px solid transparent",
                                            borderRadius: 0,
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}

                            <Button variant="contained" size="small">
                                Free Audit
                            </Button>
                        </Stack>

                        {/* Mobile Menu Button */}
                        <IconButton
                            color="inherit"
                            sx={{ display: { xs: "flex", md: "none" } }}
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </MotionAppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 260, p: 2 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                        BizGrowthLab
                    </Typography>

                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton
                                    component={RouterLink}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    selected={location.pathname === item.path}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={() => setOpen(false)}
                    >
                        Free Audit
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}
