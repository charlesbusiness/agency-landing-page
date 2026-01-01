import {
    Box,
    Container,
    Typography,
    Stack,
    Link,
    IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const MotionBox = motion(Box);

export default function Footer() {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                mt: 10,
                py: 6,
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    justifyContent="space-between"
                >
                    {/* Brand */}
                    <Box>
                        <Typography variant="h6" fontWeight={700}>
                            BizGrowthLab
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ maxWidth: 320, mt: 1 }}
                        >
                            Helping B2B companies scale revenue through automation and
                            operational excellence.
                        </Typography>

                        {/* Socials */}
                        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                            <IconButton color="inherit">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <EmailIcon />
                            </IconButton>
                        </Stack>
                    </Box>

                    {/* Company Links */}
                    <Stack spacing={1}>
                        <Typography fontWeight={600}>Company</Typography>
                        <Link underline="none" color="inherit">
                            About Us
                        </Link>
                        <Link underline="none" color="inherit">
                            Services
                        </Link>
                        <Link underline="none" color="inherit">
                            Contact
                        </Link>
                    </Stack>

                    {/* Legal */}
                    <Stack spacing={1}>
                        <Typography fontWeight={600}>Legal</Typography>
                        <Link underline="none" color="inherit">
                            Privacy Policy
                        </Link>
                        <Link underline="none" color="inherit">
                            Terms of Service
                        </Link>
                    </Stack>
                </Stack>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 6, textAlign: "center" }}
                >
                    © {new Date().getFullYear()} RevOpsLab. All rights reserved.
                </Typography>
            </Container>
        </MotionBox>
    );
}
