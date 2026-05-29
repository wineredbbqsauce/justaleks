import React from "react";
import { ART_WORKS } from "../data/portfolio";

const aspectClass = {
    tall: "aspect-[3/4]",
    square: "aspect-square",
    wide: "aspect-[4/3]",
};

export const ArtGallery = () => {
    return (
        <section
            id="gallery"
            data-testid="gallery-section"
            className="relative py-24 md:py-40 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* header */}
                <div className="grid grid-cols-12 gap-6 md:gap-8 mb-14 md:mb-20">
                    <div className="col-span-12 md:col-span-7">
                        <p className="label-mono mb-6 reveal">[ 02 · Canvas ]</p>
                        <h2
                            className="font-serif-display text-4xl md:text-6xl tracking-tight leading-[0.95] text-[#E8E6E1] reveal"
                            style={{ transitionDelay: "120ms" }}
                            data-testid="gallery-heading"
                        >
                            Slow work.<br />
                            <span className="italic text-[#8B7355]">Long exposures.</span>
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-5 md:pt-8 reveal" style={{ transitionDelay: "200ms" }}>
                        <p className="font-mono-tech text-sm leading-relaxed text-[#A3A099]">
                            A rotating archive of paintings, sculpture, and material
                            studies. Most pieces remain in the studio; selected works
                            travel.
                        </p>
                    </div>
                </div>

                {/* asymmetric gallery */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
                    {ART_WORKS.map((w, i) => {
                        const span =
                            i % 4 === 0
                                ? "md:col-span-5"
                                : i % 4 === 1
                                  ? "md:col-span-7"
                                  : i % 4 === 2
                                    ? "md:col-span-7"
                                    : "md:col-span-5";
                        const offset = i % 4 === 1 || i % 4 === 3 ? "md:translate-y-12" : "";
                        return (
                            <figure
                                key={w.id}
                                data-testid={`art-piece-${w.id}`}
                                className={`reveal group ${span} ${offset}`}
                                style={{ transitionDelay: `${i * 90}ms` }}
                            >
                                <div className={`img-hover relative ${aspectClass[w.aspect] || "aspect-[4/5]"} overflow-hidden border border-white/5 group-hover:border-[#8B7355]/40 transition-colors duration-500`}>
                                    <img
                                        src={w.image}
                                        alt={w.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                                    <span className="font-serif-display italic text-lg md:text-xl text-[#E8E6E1]">
                                        {w.title}
                                    </span>
                                    <span className="font-mono-tech text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#A3A099]">
                                        {w.medium}
                                    </span>
                                </figcaption>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ArtGallery;
