import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen pt-10 ">

      <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl ">
        <div className="backdrop-blur-md border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-10 py-4 flex items-center transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/80">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <div className="text-2xl font-serif text-slate-900 font-bold tracking-tight">Vastu</div>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex flex-[2] justify-center gap-10 text-sm font-sans font-semibold tracking-wide text-slate-600">
            <a href="#Vision" className="hover:text-amber-700 transition-all hover:scale-110">Vision</a>
            <a href="#About" className="hover:text-amber-700 transition-all hover:scale-110">About</a>
            <a href="#Services" className="hover:text-amber-700 transition-all hover:scale-110">Services</a>
            <a href="#Testimonials" className="hover:text-amber-700 transition-all hover:scale-110">Testimonials</a>
            <a href="#Contact" className="hover:text-amber-700 transition-all hover:scale-110">Contact</a>
          </div>

          {/* Right: Policy & Menu */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <a href="#" className="hidden md:block text-sm font-sans font-semibold tracking-wide text-slate-600 hover:text-amber-700 transition-all">Policy</a>
            <button className="md:hidden text-slate-900 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </nav>

      <Hero />

      <About />

      <Services />

      <section id="Testimonials" className="h-screen flex items-center justify-center bg-white border-t border-slate-900/5">
        <div className="text-center p-8">
          <h2 className="text-4xl font-serif text-slate-800 mb-4">Testimonials</h2>
          <p className="text-slate-500">Detailed content coming soon...</p>
        </div>
      </section>
    </main>
  );
}
