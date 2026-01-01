import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
