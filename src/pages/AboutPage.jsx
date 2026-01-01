import { Container, Typography, Grid, Box, Stack, Button, Card, CardContent } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";
import { useEffect, useState } from "react";

/* Sections for progress indicator */
const sections = ["hero", "mission", "values", "cta"];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0);
  const workMode = [
    ["Outcome-driven", "We measure success by real business impact."],
    ["Systems-first", "Scalable systems before tools."],
    ["Automation-native", "If it can be automated reliably, it should be."],
    ["Partnership mindset", "We act as an extension of your team."],
  ]
  /* Intersection observer for progress dots */
  useEffect(() => {
    const observers = sections.map((id, index) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(index);
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const sectionStyle = {
    // scrollSnapAlign: "start",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
        background:
          "radial-gradient(1200px 600px at 20% -10%, rgba(59,130,246,0.08), transparent 40%), radial-gradient(1000px 500px at 80% 20%, rgba(16,185,129,0.06), transparent 45%)",
      }}
    >
      {/* SECTION INDICATOR */}
      <Box
        sx={{
          position: "fixed",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: 1.5,
          zIndex: 1000,
        }}
      >
        {sections.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background:
                activeSection === i
                  ? "linear-gradient(180deg, #60a5fa, #34d399)"
                  : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>

      {/* HERO */}
      <Container id="hero" maxWidth="lg" sx={{ ...sectionStyle, py: 12 }}>
        <MotionBox variants={fadeUp} initial="hidden" animate="visible">
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              position: "relative",
              pl: { md: 2 },
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 8,
                height: "70%",
                width: 4,
                borderRadius: 2,
                background: "linear-gradient(180deg, #60a5fa, #34d399)",
                display: { xs: "none", md: "block" },
              },
            }}
          >
            We build systems that make revenue predictable.
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 720 }}
          >
            We are a RevOps and automation agency helping B2B teams eliminate
            operational friction and scale with clarity.
          </Typography>
        </MotionBox>
      </Container>

      {/* MISSION & VISION */}
      <Box
        id="mission"
        sx={{
          ...sectionStyle,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            title: "Our Mission",
            desc: "Help companies grow predictable revenue by designing systems that align teams, automate intelligently, and eliminate chaos.",
          },
          {
            title: "Our Vision",
            desc: "A future where revenue growth is driven by clarity, systems, and automation — not guesswork or burnout.",
          },
        ].map((item, i) => (
          <MotionBox
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            sx={{
              minWidth: 0,
              flexBasis: { xs: "50%", md: "50%" },
              width: { xs: "50%", md: "50%" },
              height: { xs: "50vh", md: "100vh" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: { xs: 3, md: 6 },
              position: "relative",
              overflow: "hidden",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.08)",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(400px 200px at 50% 0%, rgba(59,130,246,0.15), transparent 60%)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
              "&:hover::after": { opacity: 1 },
            }}
          >
            <Typography variant="h4" fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 520 }}>
              {item.desc}
            </Typography>
          </MotionBox>
        ))}
      </Box>

      {/* VALUES */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom sx={{ textAlign: "center" }}>
          How we work
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {workMode.map(([title, desc], i) => (
            <Grid item xs={12} md={6} key={i}>
              <MotionBox
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <CardContent>
                    <Typography fontWeight={600} variant="h6">
                      {title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      {desc}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>



      {/* CTA */}
      <Container id="cta" maxWidth="lg" sx={{ ...sectionStyle, py: 12 }}>
        <MotionBox
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{
            width: "100%",
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Let’s build a revenue system that scales.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2, mb: 4 }}>
            Book a free RevOps audit and uncover where automation can move the
            needle.
          </Typography>
          <Button size="large" variant="contained">
            Book Free Audit
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
}
