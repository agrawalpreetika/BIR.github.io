import React, { useState } from "react";

function SimpleTooltip({ text, children }) {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-slate-50 text-[11px] px-3 py-1 rounded-lg shadow-xl whitespace-nowrap z-20 animate-tooltip-pop border border-slate-700">
                    {text}
                </div>
            )}
        </div>
    );
}

function LandingStep({ onNext }) {
    const [showModal, setShowModal] = useState(false);

    function handleMainClick() {
        setShowModal(true);
    }

    function acceptTerms() {
        setShowModal(false);
        onNext();
    }

    return (
        <div className="relative h-full w-full overflow-hidden px-2 sm:px-3 py-3">
            {/* soft blobs in background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -left-10 h-52 w-52 rounded-[45%] bg-pink-300/50 blur-3xl" />
                <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-[45%] bg-sky-300/60 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-amber-200/60 blur-3xl" />
            </div>

            {/* main content spread across – NOT a card */}
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                {/* top: text + side badges */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mt-1">
                    {/* left side: heading & copy */}
                    <div className="w-full max-w-2xl">
                        {/* playful pill */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            B.I.R — Bureau of Inconvenient Research
                            <span className="hidden sm:inline text-[10px] text-slate-500">
                                (designed to waste time)
                            </span>
                        </div>

                        <h2 className="mt-3 text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold tracking-tight text-slate-900 leading-snug">
                            Welcome to{" "}
                            <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-sky-500 bg-clip-text text-transparent">
                                the Bureau of Inconvenient Research
                            </span>{" "}
                            <span className="inline-block align-middle text-2xl">🤡</span>
                        </h2>

                        {/* tiny underline */}
                        <div className="mt-3 h-1.5 w-32 rounded-full bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 opacity-90" />

                        <p className="mt-4 max-w-xl text-[14px] sm:text-[15px] text-slate-700 leading-relaxed">
                            Before we pretend to answer your question, you must agree that{" "}
                            <span className="font-semibold text-rose-600">
                                nothing here is efficient on purpose.
                            </span>{" "}
                            Side effects: extra clicks, mild rage, and screenshots for memes.
                        </p>

                        <p className="mt-2 text-[12px] sm:text-[13px] text-slate-600">
                            Think of this as a cursed version of search:{" "}
                            <span className="font-semibold text-amber-600">
                                more drama, same confusion.
                            </span>
                        </p>

                        {/* actions row */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            {/* main CTA */}
                            <button
                                onClick={handleMainClick}
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-rose-500 px-5 py-2.5 text-[14px] sm:text-[15px] font-semibold text-slate-50 shadow-lg shadow-rose-400/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-400 active:scale-[0.97]"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-rose-300/0 via-white/20 to-amber-200/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                <span className="relative">Start a Needlessly Long Search</span>
                                <span className="relative flex items-center gap-1 text-[11px] text-rose-100 group-hover:animate-wiggle">
                                    <span>continue →</span>
                                    <span>🌀</span>
                                </span>
                            </button>

                            {/* cursed disabled button */}
                            <SimpleTooltip text="Instant search was removed for dramatic effect.">
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    className="inline-flex items-center gap-1 rounded-2xl border border-slate-200 bg-white/80 px-3.5 py-1.5 text-[12px] font-medium text-slate-500 cursor-not-allowed shadow-sm hover:border-slate-300 hover:bg-white transition-colors"
                                >
                                    <span className="opacity-80">Skip the drama</span>
                                    <span className="text-[10px] opacity-60">(unavailable)</span>
                                </button>
                            </SimpleTooltip>

                            <p className="text-[11px] sm:text-[12px] text-slate-500">
                                Tip: The longer this takes, the more{" "}
                                <span className="text-rose-500 font-semibold">“premium”</span> it feels.
                            </p>
                        </div>
                    </div>

                    {/* right side: fun stat cards */}
                    <div className="flex-1 flex justify-end">
                        <div className="grid grid-cols-2 gap-3 max-w-md w-full">
                            <div className="rounded-2xl bg-white/90 border border-rose-200 px-3 py-3 text-[11px] sm:text-[12px] shadow-sm">
                                <p className="text-slate-500 mb-1">Expected usefulness</p>
                                <p className="text-2xl font-extrabold text-rose-500">??%</p>
                                <p className="mt-1 text-[10px] text-slate-500">
                                    Highly correlated with how unserious you are.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/90 border border-amber-200 px-3 py-3 text-[11px] sm:text-[12px] shadow-sm">
                                <p className="text-slate-500 mb-1">Steps in this flow</p>
                                <p className="text-2xl font-extrabold text-amber-500">7</p>
                                <p className="mt-1 text-[10px] text-slate-500">
                                    You needed 1. We gave you 7.
                                </p>
                            </div>

                            <div className="col-span-2 rounded-2xl bg-sky-50/90 border border-sky-200 px-3 py-2.5 text-[11px] sm:text-[12px] shadow-inner">
                                <p className="font-semibold text-slate-800 mb-1">
                                    What this is not:
                                </p>
                                <ul className="list-disc list-inside space-y-0.5 text-[10px] sm:text-[11px] text-slate-600">
                                    <li>A serious productivity tool</li>
                                    <li>A fast way to find answers</li>
                                    <li>Approved by any UX designer ever</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom hint bar spread across */}
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-rose-200/70 pt-3">
                    <p className="text-[11px] sm:text-[12px] text-slate-500">
                        Step 0 of 7 —{" "}
                        <span className="text-slate-700 font-medium">
                            Calibrating your patience…
                        </span>
                    </p>
                    <span className="text-[10px] sm:text-[11px] text-slate-500">
                        Estimated time wasted:{" "}
                        <span className="text-amber-500 font-semibold">3–5 minutes</span>
                    </span>
                </div>
            </div>

            {/* modal */}
            {showModal && (
                <>
                    <div className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm" />
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <div className="w-full max-w-sm rounded-2xl border border-rose-200 bg-white/95 p-5 shadow-[0_18px_50px_rgba(248,113,113,0.6)]">
                            <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                                Terms of Mild Inconvenience
                                <span className="text-sm">📜</span>
                            </h3>
                            <p className="mt-2 text-[12px] text-slate-600">
                                By continuing, you agree to:
                            </p>
                            <ul className="mt-2 space-y-1 text-[12px] text-slate-600 list-disc list-inside">
                                <li>Complete a suspicious number of steps.</li>
                                <li>Read at least one emotionally confusing message.</li>
                                <li>Accept that none of this was strictly necessary.</li>
                            </ul>

                            <p className="mt-3 text-[11px] text-slate-500">
                                Refusing to agree will still continue the flow. We just won&apos;t
                                tell you how. 🙂
                            </p>

                            <div className="mt-4 flex flex-wrap justify-end gap-2">
                                <button
                                    onClick={acceptTerms}
                                    className="rounded-md bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-700 hover:bg-slate-200 transition"
                                >
                                    Go back (coward)
                                </button>
                                <button
                                    onClick={acceptTerms}
                                    className="rounded-md bg-rose-500 px-3 py-1.5 text-[11px] font-semibold text-slate-50 hover:bg-rose-400 active:scale-[0.97] transition"
                                >
                                    Yes, waste my time
                                </button>
                                <button
                                    onClick={acceptTerms}
                                    className="rounded-md bg-amber-400 px-3 py-1.5 text-[11px] font-semibold text-slate-900 hover:bg-amber-300 active:scale-[0.97] transition"
                                >
                                    I didn&apos;t read, but yes
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default LandingStep;
