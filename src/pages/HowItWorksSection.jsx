import { Container, Grid, Typography, Box } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";

const steps = [
    "Audit & Diagnosis",
    "System Design",
    "Automation Build",
    "Optimize & Scale",
];

export default function HowItWorksSection() {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            {/* Section title */}
            <Typography
                variant="h4"
                fontWeight={600}
                sx={{ textAlign: "center" }}
            >
                How it works
            </Typography>

            <Grid
                container
                spacing={3}
                sx={{ mt: 4, maxWidth: 600, mx: "auto" }}
            >
                {steps.map((step, i) => (
                    <Grid
                        item
                        xs={12}
                        key={i}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <MotionBox
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            style={{ width: "100%" }}
                        >
                            <Box
                                sx={{
                                    textAlign: "center",
                                    p: 2,
                                    borderRadius: 2,
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <Typography variant="h6">{step}</Typography>
                            </Box>
                        </MotionBox>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
