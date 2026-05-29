import React from "react";
import { ArrowDownRight } from "lucide-react";
import { MEDIA, PROFILE } from "../data/portfolio";

export const Hero = () => {
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        >
            {/* background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={MEDIA.hero}
                    alt=""
                    className="w-full h-full object-cover opacity-90 slow-pan"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/20 via-[#0F0F0F]/45 to-[#0F0F0F]" />
            </div>

            {/* top meta strip */}
            <div className="absolute top-24 md:top-28 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between text-[#A3A099]">
                    <span className="label-mono">[ Portfolio · 2025 ]</span>
                    <span className="label-mono hidden md:inline">
                        {PROFILE.location} · 59.91°N 10.75°E
                    </span>
                </div>
            </div>

            {/* main hero text */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 md:pb-32">
                <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
                    <div className="col-span-12 md:col-span-9">
                        <p
                            data-testid="hero-subtitle"
                            className="label-mono mb-6 reveal"
                        >
                            &gt; {PROFILE.tagline}
                        </p>
                        <h1
                            data-testid="hero-title"
                            className="font-serif-display text-[18vw] md:text-[10.5rem] leading-[0.85] tracking-tighter text-[#E8E6E1] reveal"
                            style={{ transitionDelay: "120ms" }}
                        >
                            Just<br />
                            <span className="italic font-light text-[#8B7355]">
                                Aleks
                            </span>
                        </h1>
                    </div>

                    <div className="col-span-12 md:col-span-3 md:pb-4 flex flex-col gap-6">
                        <p
                            className="font-mono-tech text-sm leading-relaxed text-[#A3A099] reveal"
                            style={{ transitionDelay: "260ms" }}
                            data-testid="hero-description"
                        >
                            A workspace at the seam of <span className="text-[#E8E6E1]">software</span>{" "}
                            and <span className="text-[#E8E6E1]">studio</span> — code written like
                            sketches, paintings shipped like releases.
                        </p>
                        <button
                            data-testid="hero-cta"
                            onClick={() => scrollTo("work")}
                            className="reveal group inline-flex items-center gap-3 self-start border border-[#E8E6E1]/30 hover:border-[#8B7355] px-5 py-3 transition-colors"
                            style={{ transitionDelay: "380ms" }}
                        >
                            <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-[#E8E6E1] group-hover:text-[#8B7355] transition-colors">
                                Enter Archive
                            </span>
                            <ArrowDownRight
                                size={16}
                                strokeWidth={1.2}
                                className="text-[#E8E6E1] group-hover:text-[#8B7355] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* bottom strip */}
            <div className="relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between text-[#A3A099]">
                    <span className="label-mono">[ {PROFILE.domain} ]</span>
                    <span className="label-mono hidden sm:inline">Scroll ↓</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
