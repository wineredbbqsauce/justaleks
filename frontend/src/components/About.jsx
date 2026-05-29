import React from "react";
import { MEDIA, TIMELINE } from "../data/portfolio";

export const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 md:py-40 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-12 gap-8 md:gap-16">
                    {/* image */}
                    <div className="col-span-12 md:col-span-5 reveal">
                        <div className="img-hover relative aspect-[4/5] overflow-hidden">
                            <img
                                src={MEDIA.portrait}
                                alt="Portrait in the studio"
                                className="w-full h-full object-cover grayscale-[0.15]"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                        </div>
                        <p className="label-mono mt-4">[ fig. 01 — atelier, 03:14 ]</p>
                    </div>

                    {/* text */}
                    <div className="col-span-12 md:col-span-7 md:pt-8">
                        <p className="label-mono mb-8 reveal">[ 00 · About ]</p>
                        <h2
                            className="font-serif-display text-4xl md:text-6xl leading-[0.95] tracking-tight text-[#E8E6E1] reveal"
                            style={{ transitionDelay: "120ms" }}
                            data-testid="about-heading"
                        >
                            Two hands.<br />
                            One <span className="italic text-[#8B7355]">grammar</span> of making.
                        </h2>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A3A099] font-mono-tech text-sm leading-relaxed">
                            <p className="reveal" style={{ transitionDelay: "200ms" }}>
                                I&apos;m Aleks — half engineer, half painter, fully Norwegian.
                                By daylight I architect software systems; after dusk I work in
                                oils, raw umber, and dust. The two practices feed each other
                                more than I&apos;d ever admit.
                            </p>
                            <p className="reveal" style={{ transitionDelay: "280ms" }}>
                                I believe interfaces deserve the same attention a canvas
                                gets: composition, weight, restraint. Whether shipping a
                                product or finishing a piece — the goal is the same. Make
                                something honest, then step back.
                            </p>
                        </div>

                        {/* timeline */}
                        <div
                            className="mt-16 border-t border-white/5 reveal"
                            style={{ transitionDelay: "360ms" }}
                            data-testid="about-timeline"
                        >
                            {TIMELINE.map((t) => (
                                <div
                                    key={t.year}
                                    className="grid grid-cols-12 gap-4 py-5 border-b border-white/5 group hover:bg-white/[0.015] transition-colors"
                                >
                                    <span className="col-span-2 font-mono-tech text-xs tracking-[0.2em] text-[#8B7355] pt-1">
                                        {t.year}
                                    </span>
                                    <span className="col-span-7 md:col-span-7 font-serif-display text-xl md:text-2xl text-[#E8E6E1]">
                                        {t.title}
                                    </span>
                                    <span className="col-span-3 text-right font-mono-tech text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#A3A099] pt-2">
                                        {t.place}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
