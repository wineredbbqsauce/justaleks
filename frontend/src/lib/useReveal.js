import { useEffect } from "react";

/**
 * Adds `is-visible` to any element with class `reveal` when it enters viewport.
 * Used for staggered fade-up scroll animation.
 */
export default function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}
