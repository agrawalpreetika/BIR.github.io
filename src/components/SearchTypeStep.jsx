import React from "react";
import { motion } from "framer-motion";
import ChaosOverlay from "./ChaosOverlay.jsx";

const OPTIONS = [
    {
        key: "stalk",
        label: "Stalking an Ex",
        helper: "We won’t tell 👀",
        emoji: "🕵️‍♀️",
    },
    {
        key: "panic",
        label: "Assignment Panic",
        helper: "Deadline? What deadline.",
        emoji: "📚🔥",
    },
    {
        key: "pretend",
        label: "Fake Productivity",
        helper: "Alt+Tab master.",
        emoji: "💼🤡",
    },
    {
        key: "exist",
        label: "Existential Crisis",
        helper: "Snack first, think later.",
        emoji: "🌌",
    },
    {
        key: "bored",
        label: "Just Bored",
        helper: "Here for vibes only.",
        emoji: "🌀",
    },
];

function SearchTypeStep({ value, onChange, onNext, onBack, setMessage }) {
    const [isLoading, setIsLoading] = React.useState(false);

    function handleSelect(opt) {
        onChange(opt.key);
        setMessage("");
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2300);
    }

    function handleNext() {
        if (!value) {
            setMessage("Pick one tiny vibe first 💖");
            return;
        }
        if (isLoading) {
            setMessage("Give the vibes 1 sec to settle 🌈");
            return;
        }
        setMessage("");
        onNext();
    }

    const selected = OPTIONS.find((o) => o.key === value);

    return (
        <>
            <ChaosOverlay isLoading={isLoading} selected={selected} />

            <motion.div
                className="relative h-full w-full px-1 sm:px-2 py-2"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
            >
                {/* background gradient + blobs, but NOT a card */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-16 -left-8 h-40 w-40 rounded-[45%] bg-pink-200/60 blur-3xl" />
                    <div className="absolute -bottom-16 right-0 h-44 w-44 rounded-[45%] bg-sky-200/60 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-amber-100/70 blur-3xl" />
                </div>

                <div className="relative flex h-full flex-col gap-4">
                    {/* header row spread across */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                        <div>
                            <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-slate-900 flex items-center gap-2">
                                Choose your chaos mood
                                <span className="text-2xl">✨</span>
                            </h2>
                            <p className="mt-1 text-[13px] sm:text-[14px] text-slate-600 max-w-xl">
                                What&apos;s the real reason you opened this tab? Pick a vibe.
                                No overthinking allowed. (That’s for the next step.)
                            </p>
                        </div>

                        {selected && (
                            <motion.div
                                key={selected.key}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-2xl bg-white/80 border border-pink-100 px-3 py-2 text-[11px] sm:text-[12px] text-slate-600 shadow-sm max-w-xs self-start lg:self-auto"
                            >
                                <p className="font-semibold text-slate-800 mb-1">
                                    Currently manifesting:
                                </p>
                                <p>
                                    <span className="mr-1">{selected.emoji}</span>
                                    <span className="font-medium">{selected.label}</span>
                                </p>
                                <p className="mt-1 text-[10px] text-slate-500">
                                    You can still change your mind. We&apos;ll judge silently.
                                </p>
                            </motion.div>
                        )}
                    </div>

                    {/* options – spread like tiles, not squished in a card */}
                    <div
                        className={`mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${isLoading ? "opacity-40 pointer-events-none" : ""
                            }`}
                    >
                        {OPTIONS.map((opt) => {
                            const isActive = value === opt.key;
                            return (
                                <motion.button
                                    key={opt.key}
                                    type="button"
                                    onClick={() => handleSelect(opt)}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`
                                        flex flex-col items-start gap-2 rounded-2xl px-3 py-3 text-left
                                        bg-white/90 border shadow-sm
                                        hover:shadow-md transition-all
                                        ${isActive
                                            ? "border-pink-300 shadow-[0_0_0_2px_rgba(244,114,182,0.4)]"
                                            : "border-pink-100 hover:border-pink-200"
                                        }
                                    `}
                                >
                                    <motion.div
                                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200 to-amber-200 text-2xl"
                                        animate={
                                            isActive
                                                ? { scale: [1, 1.1, 1], rotate: [0, -4, 4, 0] }
                                                : { scale: 1, rotate: 0 }
                                        }
                                        transition={{ duration: 0.35 }}
                                    >
                                        {opt.emoji}
                                    </motion.div>

                                    <div className="flex flex-col">
                                        <span className="text-[13px] sm:text-[14px] font-semibold text-slate-900">
                                            {opt.label}
                                        </span>
                                        <span className="text-[11px] sm:text-[12px] text-slate-500">
                                            {opt.helper}
                                        </span>
                                    </div>

                                    {isActive && (
                                        <span className="mt-1 text-[11px] text-pink-500 font-medium">
                                            ✨ picked
                                        </span>
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* bottom controls spread */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                            <button
                                type="button"
                                onClick={onBack}
                                disabled={isLoading}
                                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] sm:text-[13px] font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                ← Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[12px] sm:text-[13px] font-semibold text-white shadow-md ${isLoading
                                    ? "bg-slate-400 cursor-wait"
                                    : "bg-pink-500 hover:bg-pink-400 active:scale-[0.97] transition-all"
                                    }`}
                            >
                                Next
                                <span className="text-xs">→</span>
                            </button>
                        </div>

                        <span className="text-[11px] sm:text-[12px] text-slate-500">
                            Tiny step, big vibe 💕
                        </span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default SearchTypeStep;
