"use client";

export default function NavBar() {


    return (
        <div>
            <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl ">
                <div className="backdrop-blur-md border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-10 py-4 flex items-center transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] ">
                    {/* Left: Logo */}
                    <div className="flex-1 flex justify-start">
                        <a href="#Home" className="text-2xl font-serif text-slate-900 font-bold tracking-tight">Vastu</a>
                    </div>

                    {/* Center: Links */}
                    <div className="hidden md:flex flex-[2] justify-center gap-10 text-sm font-sans font-semibold tracking-wide text-slate-600">
                        <a href="#About" className="hover:text-amber-700 transition-all hover:scale-110">About</a>
                        <a href="#Services" className="hover:text-amber-700 transition-all hover:scale-110">Services</a>
                        <a href="#Blogs" className="hover:text-amber-700 transition-all hover:scale-110">Blogs</a>
                        <a href="#Contact" className="hover:text-amber-700 transition-all hover:scale-110">Contact</a>
                    </div>

                    {/* Right: Theme Toggle */}
                    <div className="flex-1 flex justify-end">
                        <button
                            
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-50"
                            aria-label="Toggle Theme"
                        >
                            
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}