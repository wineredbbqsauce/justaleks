import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
    { id: "work", label: "Work" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#0F0F0F]/85 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
                <button
                    data-testid="nav-logo"
                    onClick={() => go("hero")}
                    className="font-mono-tech text-xs tracking-[0.3em] uppercase text-[#E8E6E1] hover:text-[#8B7355] transition-colors"
                >
                    JA<span className="text-[#8B7355]">.</span>
                </button>

                {/* desktop */}
                <nav className="hidden md:flex items-center gap-10">
                    {NAV.map((n) => (
                        <button
                            key={n.id}
                            data-testid={`nav-${n.id}-link`}
                            onClick={() => go(n.id)}
                            className="link-underline font-mono-tech text-xs tracking-[0.25em] uppercase text-[#A3A099] hover:text-[#E8E6E1] transition-colors"
                        >
                            {n.label}
                        </button>
                    ))}
                </nav>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen((o) => !o)}
                    className="md:hidden text-[#E8E6E1]"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={20} strokeWidth={1.2} /> : <Menu size={20} strokeWidth={1.2} />}
                </button>
            </div>

            {/* mobile drawer */}
            {open && (
                <div
                    data-testid="nav-mobile-menu"
                    className="md:hidden bg-[#0F0F0F]/95 backdrop-blur-xl border-t border-white/5"
                >
                    <div className="px-6 py-8 flex flex-col gap-6">
                        {NAV.map((n) => (
                            <button
                                key={n.id}
                                data-testid={`nav-mobile-${n.id}-link`}
                                onClick={() => go(n.id)}
                                className="text-left font-mono-tech text-sm tracking-[0.25em] uppercase text-[#A3A099] hover:text-[#E8E6E1]"
                            >
                                {n.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
