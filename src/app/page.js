import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";
import Technologies from "./components/Technologies";


export default function Home() {
  return (
    <>
      <link
        rel="shortcut icon"
        href="/Images/niranjan-favicon.png"
        type="image/x-icon"
      />
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementSection/>
          <Technologies/>
          <AboutSection />
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
