// src/components/MoodStep.jsx
import React from "react";
import { motion } from "framer-motion";
import { Palette, Sparkles } from "lucide-react";
import MoodCelebration from "./MoodCelebration";

const MOODS = [
    { key: "mild", label: "Mildly Dead Inside", note: "Official mood of semester end." },
    { key: "memes", label: "Just Here for Memes", note: "You learn via screenshots only." },
    { key: "angry", label: "Angrily Googling", note: "Ctrl + F on your whole life." },
    { key: "overthink", label: "Overthinking Everything", note: "27 tabs, 1 doubt." },
    { key: "delulu", label: "Delulu but Confident", note: "No plan, only vibes." },
    { key: "chill", label: "Suspiciously Chill", note: "Clearly forgetting some deadline." },
    { key: "burnout", label: "Burnout Speedrun", note: "Productivity: 3%, scrolling: 97%." },
];

const MOOD_TIPS = [
    "Pro tip: pick the one that hurts a little.",
    "Studies show 90% are secretly ‘Overthinking Everything’.",
    "Mood doesn’t change results. Only your drama level.",
    "If confused, pick ‘Delulu but Confident’. It’s 2025.",
];

function MoodStep({ form, onChange, onNext, onBack, setMessage }) {
    const [celebrationMood, setCelebrationMood] = React.useState(null);
    const [showCelebration, setShowCelebration] = React.useState(false);
    const [tipIndex, setTipIndex] = React.useState(0);

    const selectedMood = MOODS.find((m) => m.key === (form && form.mood));

    function triggerCelebration(moodKey) {
        setCelebrationMood(moodKey || "default");
        setShowCelebration(true);
    }

    function handleMoodClick(moodKey) {
        onChange({ mood: moodKey });
        setMessage("");
        triggerCelebration(moodKey);
    }

    function handleNext() {
        if (!form || !form.mood) {
            setMessage("Pick a mood before we pretend this matters 🎭");
            triggerCelebration("default");
            return;
        }
        setMessage("");
        triggerCelebration(form.mood);

        setTimeout(() => {
            onNext();
        }, 1900);
    }

    function shuffleTip() {
        setTipIndex((prev) => (prev + 1) % MOOD_TIPS.length);
    }

    return (
        <>
            {/* celebration overlay */}
            <MoodCelebration
                mood={celebrationMood}
                show={showCelebration}
                onEnd={() => setShowCelebration(false)}
            />

            <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full px-1 sm:px-2 py-2"
            >
                {/* full-area soft background */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-16 -left-8 h-40 w-40 rounded-[45%] bg-amber-200/60 blur-3xl" />
                    <div className="absolute -bottom-16 right-0 h-44 w-44 rounded-[45%] bg-rose-200/60 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-100/80 blur-3xl" />
                </div>

                <div className="relative flex h-full flex-col gap-4">
                    {/* HEADER */}
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] sm:text-[12px] font-medium text-amber-800 shadow-sm border border-amber-200">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                Step 2 · Pick your mood
                                <span className="hidden sm:inline text-[10px] text-slate-500">
                                    (for dramatic effect only)
                                </span>
                            </div>

                            <div className="mt-2 flex items-center gap-2">
                                <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-slate-900">
                                    How are you pretending to feel today?
                                </h2>
                                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />
                            </div>

                            <p className="mt-1 text-[13px] sm:text-[14px] text-slate-600 max-w-xl">
                                This mood will be used to{" "}
                                <span className="font-semibold text-rose-500">
                                    over-dramatize
                                </span>{" "}
                                your search experience. Accuracy of answers:{" "}
                                <span className="font-semibold">unchanged.</span>
                            </p>

                            {selectedMood && (
                                <motion.div
                                    key={selectedMood.key}
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/85 border border-rose-100 px-3 py-1.5 text-[11px] sm:text-[12px] text-rose-700 shadow-sm"
                                >
                                    <span className="text-base">
                                        {selectedMood.label.split(" ")[0]}
                                    </span>
                                    <span className="truncate">
                                        Mood locked:
                                        <span className="font-semibold ml-1">
                                            {selectedMood.label.replace(/^[^ ]+\s*/, "")}
                                        </span>
                                    </span>
                                </motion.div>
                            )}
                        </div>

                        {/* tiny summary card / annoyance box */}
                        <div className="mt-1 rounded-2xl bg-white/85 border border-slate-200 px-3 py-2 text-[11px] sm:text-[12px] text-slate-600 shadow-sm max-w-xs self-start">
                            <p className="font-semibold text-slate-800 mb-1">
                                Current selection:
                            </p>
                            <p>
                                Mood:{" "}
                                <span className="font-medium text-rose-600">
                                    {(form && form.mood) || "none (suspicious)"}
                                </span>
                            </p>
                            <p className="mt-1 text-[10px] text-slate-500">
                                Impact on actual results:{" "}
                                <span className="font-semibold">0%</span>. Impact on drama:
                                <span className="font-semibold"> 300%</span>.
                            </p>
                            <p className="mt-1 text-[10px] text-rose-500/90">
                                Recommended by: the Anxiety Engine™.
                            </p>
                        </div>
                    </div>

                    {/* MOOD GRID */}
                    <div className="relative mt-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xs sm:text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                Step 2.1 · Emotional aesthetic
                            </span>
                            <button
                                type="button"
                                onClick={shuffleTip}
                                className="text-[10px] sm:text-[11px] text-slate-500 hover:text-rose-500 underline-offset-2 hover:underline"
                            >
                                {MOOD_TIPS[tipIndex]}
                            </button>
                        </div>

                        <div className="grid gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {MOODS.map((m) => {
                                const active = form && form.mood === m.key;
                                return (
                                    <motion.button
                                        key={m.key}
                                        type="button"
                                        whileTap={{ scale: 0.97 }}
                                        whileHover={{ y: -2 }}
                                        onClick={() => handleMoodClick(m.key)}
                                        className={`
                                            group flex items-start gap-2 rounded-2xl border px-3 py-2.5 text-left
                                            text-[13px] sm:text-[14px] font-medium transition-all bg-white/90
                                            ${active
                                                ? "border-rose-400 bg-rose-50 shadow-[0_0_0_2px_rgba(248,113,113,0.35)]"
                                                : "border-slate-200 hover:border-rose-200 hover:bg-rose-50/80"
                                            }
                                        `}
                                    >
                                        <span className="mt-0.5 mr-1 text-lg">
                                            {m.label.includes("Dead") && "🥲"}
                                            {m.key === "memes" && "🤡"}
                                            {m.key === "angry" && "😡"}
                                            {m.key === "overthink" && "🧠"}
                                            {m.key === "delulu" && "✨"}
                                            {m.key === "chill" && "🧋"}
                                            {m.key === "burnout" && "🔥"}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-slate-900">{m.label}</span>
                                            <span className="text-[11px] sm:text-[12px] text-slate-500 font-normal">
                                                {m.note}
                                            </span>
                                        </div>
                                        {active && (
                                            <span className="ml-auto text-[11px] text-rose-500 font-semibold">
                                                locked 🔒
                                            </span>
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* little note under moods */}
                        <p className="mt-3 text-[11px] sm:text-[12px] text-slate-500">
                            If unsure, default to{" "}
                            <span className="font-medium text-rose-500">
                                “Overthinking Everything”
                            </span>
                            . Statistically correct for 99% of users.
                        </p>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <button
                                type="button"
                                onClick={onBack}
                                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/85 px-3 py-1.5 text-[12px] sm:text-[13px] font-medium text-slate-700 hover:bg-slate-50"
                            >
                                ← Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3.5 py-1.5 text-[12px] sm:text-[13px] font-semibold text-white shadow-md hover:bg-rose-400 active:scale-[0.97] transition-all"
                            >
                                Lock this mood
                                <Palette className="ml-1 h-3.5 w-3.5" />
                            </button>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-slate-500">
                            Warning: the celebration is more important than your feelings.
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default MoodStep;
