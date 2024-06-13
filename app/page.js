import HeroSection from "@/Components/HeroSection";
import NavBar from "@/Components/NavBar";
import AboutMe from "@/Components/AboutMe";
import ProjectsSection from "@/Components/ProjectsSection";
import EmailSection from "@/Components/EmailSection";
import Caixa from "@/Components/Caixa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <NavBar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <EmailSection />
        <Caixa />
      </div>
    </main>
  );
}
