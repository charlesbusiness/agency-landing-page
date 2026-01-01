// src/pages/home/ProblemsSection.tsx
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";

const problems = [
    "Leads falling through the cracks",
    "Sales & marketing data not aligned",
    "Manual follow-ups and reporting",
    "CRM tools nobody trusts",
];

export default function ProblemsSection() {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
                Revenue leaks cost more than you think
            </Typography>

            <Grid container spacing={3} sx={{ mt: 3 }}>
                {problems.map((text, i) => (
                    <Grid item xs={12} md={3} key={i}>
                        <MotionBox
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card elevation={3}>
                                <CardContent>
                                    <Typography>{text}</Typography>
                                </CardContent>
                            </Card>
                        </MotionBox>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
