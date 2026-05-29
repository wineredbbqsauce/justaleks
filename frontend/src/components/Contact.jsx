import React, { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { toast, Toaster } from "sonner";
import { PROFILE } from "../data/portfolio";

export const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);

    const onChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("Please fill all fields.");
            return;
        }
        setSending(true);
        // Static-site friendly: open the user's mail client with prefilled message.
        // For a true async submission, swap in a Formspree endpoint (replace below).
        const subject = encodeURIComponent(`Portfolio · message from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
        window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
        setTimeout(() => {
            toast.success("Mail client opened. Tusen takk!");
            setSending(false);
            setForm({ name: "", email: "", message: "" });
        }, 600);
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 md:py-40 border-t border-white/5"
        >
            <Toaster position="bottom-center" theme="dark" />
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-12 gap-8 md:gap-16">
                    {/* left — heading */}
                    <div className="col-span-12 md:col-span-6">
                        <p className="label-mono mb-6 reveal">[ 04 · Contact ]</p>
                        <h2
                            className="font-serif-display text-5xl md:text-7xl leading-[0.9] tracking-tight text-[#E8E6E1] reveal"
                            style={{ transitionDelay: "100ms" }}
                            data-testid="contact-heading"
                        >
                            Let&apos;s <span className="italic text-[#8B7355]">build</span>.<br />
                            Or <span className="italic text-[#8B7355]">create</span>.
                        </h2>
                        <div
                            className="mt-12 space-y-4 font-mono-tech text-sm text-[#A3A099] reveal"
                            style={{ transitionDelay: "220ms" }}
                        >
                            <p>
                                For commissions, collaborations, or a quiet coffee in Oslo.
                            </p>
                            <a
                                href={`mailto:${PROFILE.email}`}
                                data-testid="contact-email-link"
                                className="link-underline inline-flex items-center gap-2 text-[#E8E6E1] hover:text-[#8B7355] transition-colors"
                            >
                                {PROFILE.email}
                                <ArrowUpRight size={14} strokeWidth={1.2} />
                            </a>
                            <div className="flex items-center gap-5 pt-4">
                                <a
                                    href={PROFILE.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="contact-github-link"
                                    className="link-underline text-xs uppercase tracking-[0.25em]"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={PROFILE.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="contact-linkedin-link"
                                    className="link-underline text-xs uppercase tracking-[0.25em]"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* right — form */}
                    <form
                        onSubmit={onSubmit}
                        data-testid="contact-form"
                        className="col-span-12 md:col-span-6 md:pt-12 reveal"
                        style={{ transitionDelay: "300ms" }}
                    >
                        <div className="space-y-8">
                            <Field
                                label="Name"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                testid="contact-input-name"
                            />
                            <Field
                                label="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={onChange}
                                testid="contact-input-email"
                            />
                            <div>
                                <label className="label-mono block mb-3">[ Message ]</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={onChange}
                                    rows={5}
                                    data-testid="contact-input-message"
                                    className="w-full bg-transparent border-b border-white/15 focus:border-[#8B7355] focus:outline-none py-2 font-mono-tech text-sm text-[#E8E6E1] resize-none transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={sending}
                                data-testid="contact-submit-button"
                                className="group inline-flex items-center gap-3 border border-[#E8E6E1]/30 hover:border-[#8B7355] hover:bg-[#8B7355] hover:text-[#0F0F0F] px-6 py-4 transition-all disabled:opacity-50"
                            >
                                <span className="font-mono-tech text-xs uppercase tracking-[0.3em]">
                                    {sending ? "Sending…" : "Send Transmission"}
                                </span>
                                <Send size={14} strokeWidth={1.2} className="transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Field = ({ label, name, type = "text", value, onChange, testid }) => (
    <div>
        <label className="label-mono block mb-3">[ {label} ]</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            data-testid={testid}
            className="w-full bg-transparent border-b border-white/15 focus:border-[#8B7355] focus:outline-none py-2 font-mono-tech text-sm text-[#E8E6E1] transition-colors"
        />
    </div>
);

export default Contact;
