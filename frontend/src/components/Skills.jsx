import React from "react";
import { SKILLS } from "../data/portfolio";

export const Skills = () => {
    // duplicate list for seamless marquee
    const items = [...SKILLS, ...SKILLS];
    return (
        <section
            data-testid="skills-section"
            className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
                <p className="label-mono">[ 03 · Toolbox ]</p>
            </div>

            <div className="marquee-track">
                {items.map((s, i) => (
                    <span
                        key={`${s}-${i}`}
                        className="font-serif-display italic text-5xl md:text-7xl text-[#E8E6E1] px-8 md:px-12 whitespace-nowrap"
                        data-testid={`skill-${i}`}
                    >
                        {s}
                        <span className="text-[#8B7355] mx-4">·</span>
                    </span>
                ))}
            </div>

            <div className="marquee-track mt-6" style={{ animationDirection: "reverse", animationDuration: "55s" }}>
                {items.map((s, i) => (
                    <span
                        key={`r-${s}-${i}`}
                        className="font-mono-tech text-xs md:text-sm tracking-[0.3em] uppercase text-[#A3A099] px-6 whitespace-nowrap"
                    >
                        {s}
                        <span className="text-[#8B7355] mx-3">/</span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
