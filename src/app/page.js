import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-gradient-to-b
        from-[#f7f7f5]
        via-[#f4f4ff]
        to-[#fbfbfe]
        text-[#151515]
        transition-colors
        duration-300
        dark:from-[#090909]
        dark:via-[#0b0b12]
        dark:to-[#0f0f17]
        dark:text-white
      "
    >
      <Navbar />

      <HeroSection />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}