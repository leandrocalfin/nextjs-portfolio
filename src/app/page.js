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
        bg-[#f7f7f5]
        text-[#151515]
        transition-colors
        duration-300
        dark:bg-[#090909]
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