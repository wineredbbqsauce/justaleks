import React from "react";
import { PROFILE } from "../data/portfolio";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="relative border-t border-white/5 bg-[#0B0B0B]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                <div className="grid grid-cols-12 gap-6 md:gap-8">
                    <div className="col-span-12 md:col-span-6">
                        <h3 className="font-serif-display text-4xl md:text-5xl text-[#E8E6E1]">
                            {PROFILE.domain}
                        </h3>
                        <p className="label-mono mt-4">[ Studio · Code · Oslo, NO ]</p>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <p className="label-mono mb-4">Index</p>
                        <ul className="space-y-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#A3A099]">
                            <li><a href="#work" className="link-underline">Work</a></li>
                            <li><a href="#gallery" className="link-underline">Gallery</a></li>
                            <li><a href="#about" className="link-underline">About</a></li>
                            <li><a href="#contact" className="link-underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <p className="label-mono mb-4">Elsewhere</p>
                        <ul className="space-y-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#A3A099]">
                            <li><a className="link-underline" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a className="link-underline" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a className="link-underline" href={`mailto:${PROFILE.email}`}>Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#6B705C]">
                    <span>© {new Date().getFullYear()} Aleks — All works reserved.</span>
                    <span>Hand-built · Hosted on GitHub Pages</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
