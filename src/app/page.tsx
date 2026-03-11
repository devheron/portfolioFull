import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Posts from "@/components/sections/Posts";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Posts />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
