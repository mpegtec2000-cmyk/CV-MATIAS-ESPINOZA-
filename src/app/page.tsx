import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutVisionCode from "@/components/AboutVisionCode";
import DocumentsSection from "@/components/DocumentsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 selection:bg-black selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About & Vision Code Agency Philosophy */}
        <AboutVisionCode />

        {/* Official Documents & Direct PDF Downloads */}
        <DocumentsSection />

        {/* Work Experience Timeline */}
        <ExperienceTimeline />

        {/* Technical & Operational Capabilities */}
        <CapabilitiesSection />

        {/* Projects & Work Showcase (Supabase Ready) */}
        <ProjectsShowcase />

        {/* Contact Form & Direct Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
