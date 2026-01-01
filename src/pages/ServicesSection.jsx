// src/pages/home/ServicesSection.tsx
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";

const services = [
    {
        title: "Revenue Operations",
        desc: "Align sales, marketing, and finance into a single revenue system.",
    },
    {
        title: "CRM & Pipeline Automation",
        desc: "Build pipelines that move deals automatically, not manually.",
    },
    {
        title: "Process Automation",
        desc: "Eliminate repetitive work using workflow and AI automation.",
    },
    {
        title: "Reporting & Intelligence",
        desc: "Real-time dashboards executives actually trust.",
    },
];

export default function ServicesSection() {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
                What We Do
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                {services.map((s, i) => (
                    <Grid item xs={12} md={3} key={i}>
                        <MotionBox
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card sx={{ height: "100%" }}>
                                <CardContent>
                                    <Typography fontWeight={600}>{s.title}</Typography>
                                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                                        {s.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </MotionBox>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
