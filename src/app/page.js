import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AchievementsSection from "./components/AchievementsSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <AchievementsSection />
        <About />
        <Skills />
        <Projects />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
