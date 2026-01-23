import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Blogs from "@/src/components/Blogs";
import Contact from "@/src/components/Contact";
import NavBar from "@/src/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen pt-10 ">

      <NavBar />

      <Hero />

      <About />

      <Services />

      <Blogs />

      <Contact />

    </main>
  );
}
