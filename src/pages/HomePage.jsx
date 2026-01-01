// src/pages/home/HomePage.tsx
import HeroSection from "./HeroSection";
import ProblemsSection from "./ProblemsSection";
import ServicesSection from "./ServicesSection";
import HowItWorksSection from "./HowItWorksSection";
import CTASection from "./CTASection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ProblemsSection />
            <ServicesSection />
            <HowItWorksSection />
            <CTASection />
        </>
    );
}
