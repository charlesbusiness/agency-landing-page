import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const services = [
    {
        title: "Revenue Operations (RevOps)",
        description:
            "Align sales, marketing, and customer success with unified data, tooling, and processes to drive predictable revenue growth.",
    },
    {
        title: "Custom Web Applications",
        description:
            "We design and build scalable, secure, and high-performance web applications tailored to your business needs.",
    },
    {
        title: "Process Automation",
        description:
            "Automate repetitive workflows across CRM, finance, support, and operations to reduce cost and increase efficiency.",
    },
    {
        title: "Enterprise Application Support",
        description:
            "Ongoing support, optimization, and integration for mission-critical enterprise systems and internal tools.",
    },
];

export default function ServicesPage() {
    return (
        <Box>
            {/* Header */}
            <Box sx={{ textAlign: "center", py: 6 }}>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                    Our Services
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: 700, mx: "auto" }}
                >
                    End to end solutions that drive revenue, efficiency, and
                    operational excellence.
                </Typography>
            </Box>

            {/* FLEX SERVICES */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                }}
            >
                {services.map((service, i) => (
                    <MotionBox
                        key={i}
                        sx={{
                            /* 🔑 REQUIRED FOR MOBILE FLEX */
                            minWidth: 0,

                            flexBasis: {
                                xs: "50%",
                                sm: "50%",
                                md: "25%",
                            },
                            width: {
                                xs: "50%",
                                sm: "50%",
                                md: "25%",
                            },

                            height: {
                                xs: "50vh",
                                sm: "50vh",
                                md: "100vh",
                            },

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            p: 4,

                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                            border: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >

                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            {service.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {service.description}
                        </Typography>
                    </MotionBox>
                ))}
            </Box>

            {/* CTA */}
            <Box sx={{ textAlign: "center", py: 6 }}>
                <Button variant="contained" size="large">
                    Request a Free Audit
                </Button>
            </Box>
        </Box>
    );
}
