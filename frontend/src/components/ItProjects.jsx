import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { IT_PROJECTS } from "../data/portfolio";

const sizeClasses = {
    large: "md:col-span-7 md:row-span-2",
    wide: "md:col-span-7",
    small: "md:col-span-5",
};

export const ItProjects = () => {
    return (
        <section
            id="work"
            data-testid="work-section"
            className="relative py-24 md:py-40 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* header */}
                <div className="flex items-end justify-between mb-14 md:mb-20">
                    <div>
                        <p className="label-mono mb-6 reveal">[ 01 · Code ]</p>
                        <h2
                            className="font-serif-display text-4xl md:text-6xl tracking-tight leading-[0.95] text-[#E8E6E1] reveal"
                            style={{ transitionDelay: "120ms" }}
                            data-testid="work-heading"
                        >
                            Selected <span className="italic text-[#8B7355]">software</span>.
                        </h2>
                    </div>
                    <span className="hidden md:block label-mono">
                        [ {String(IT_PROJECTS.length).padStart(2, "0")} projects ]
                    </span>
                </div>

                {/* bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {IT_PROJECTS.map((p, i) => (
                        <a
                            key={p.id}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`project-card-${p.id}`}
                            className={`group reveal relative bg-[#171716] border border-white/5 hover:border-[#8B7355]/60 transition-colors duration-500 ${sizeClasses[p.size] || "md:col-span-6"}`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            {p.image && (
                                <div className="img-hover relative aspect-[16/10] overflow-hidden border-b border-white/5">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            )}
                            <div className="p-6 md:p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <span className="font-mono-tech text-xs tracking-[0.2em] text-[#8B7355]">
                                        / {p.index}
                                    </span>
                                    <span className="font-mono-tech text-xs tracking-[0.2em] text-[#A3A099]">
                                        {p.year}
                                    </span>
                                </div>
                                <h3 className="font-serif-display text-3xl md:text-4xl text-[#E8E6E1] mb-3">
                                    {p.title}
                                </h3>
                                <p className="font-mono-tech text-sm text-[#A3A099] leading-relaxed mb-6">
                                    {p.summary}
                                </p>
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    {p.stack.map((s) => (
                                        <span
                                            key={s}
                                            className="font-mono-tech text-[10px] tracking-[0.2em] uppercase border border-white/10 px-2 py-1 text-[#A3A099]"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 font-mono-tech text-xs tracking-[0.2em] uppercase text-[#E8E6E1] group-hover:text-[#8B7355] transition-colors">
                                    <Github size={14} strokeWidth={1.2} />
                                    <span>git clone — view source</span>
                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.2}
                                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItProjects;
