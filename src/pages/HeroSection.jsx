// src/pages/home/HeroSection.tsx
import { Container, Typography, Button, Stack } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";

export default function HeroSection() {
    return (
        <Container maxWidth="lg" sx={{ py: 14 }}>
            <MotionBox
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h2" fontWeight={700} gutterBottom>
                    Increase Revenue.
                    <br />
                    Eliminate Manual Work.
                </Typography>

                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 620 }}>
                    We help B2B companies scale faster by automating sales, marketing,
                    finance, and revenue operations.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                    <Button size="large" variant="contained">
                        Book Free RevOps Audit
                    </Button>
                    <Button size="large" variant="outlined">
                        How It Works
                    </Button>
                </Stack>
            </MotionBox>
        </Container>
    );
}
