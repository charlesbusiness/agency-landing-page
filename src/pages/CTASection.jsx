import { Container, Typography, Button } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";

export default function CTASection() {
    return (
        <Container maxWidth="lg" sx={{ py: 12, textAlign: "center" }}>
            <MotionBox
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Ready to Fix Your Revenue Operations?
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 4 }}>
                    Get a free audit and see exactly where automation will move the needle.
                </Typography>

                <Button size="large" variant="contained">
                    Book Free Audit
                </Button>
            </MotionBox>
        </Container>
    );
}
