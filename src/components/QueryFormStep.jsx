import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, FileText, Gauge, ClipboardList } from "lucide-react";
import toast from "react-hot-toast";

function QueryFormStep({ form, onChange, onNext, onBack, setMessage }) {
    const length = form.query.length;

    function urgencyLabel(value) {
        if (value <= 25) return "It Can Wait";
        if (value <= 50) return "Maybe Soon";
        if (value <= 75) return "I Needed This Yesterday";
        return "Too Late Anyway";
    }

    function handleNext() {
        if (length < 20) {
            toast.error("Your question lacks emotional depth. Please elaborate.");
            //setMessage("Your question lacks emotional depth. Please elaborate.");
            return;
        }
        setMessage("");
        onNext();
    }

    const urgencyText = urgencyLabel(form.urgency);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative h-full w-full px-1 sm:px-2 py-2"
        >
            {/* soft pastel background spread across the whole area */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-16 -left-8 h-40 w-40 rounded-[45%] bg-rose-200/60 blur-3xl" />
                <div className="absolute -bottom-16 right-0 h-48 w-48 rounded-[45%] bg-sky-200/60 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-amber-100/80 blur-3xl" />
            </div>

            <div className="relative flex h-full flex-col gap-4 rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 px-4 py-4 sm:px-5 sm:py-5 shadow-[0_18px_45px_rgba(248,113,113,0.35)]">
                {/* HEADER */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-2 max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-[11px] sm:text-[12px] font-medium text-slate-700 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                            Form 13-B — Over-Explained Query Request
                        </div>

                        <div className="flex items-center gap-2">
                            <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-slate-900 tracking-tight">
                                Describe your question{" "}
                                <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-sky-500 bg-clip-text text-transparent">
                                    in painful detail
                                </span>
                            </h2>
                            <FileText className="h-4 w-4 text-rose-400" />
                        </div>

                        <p className="text-[13px] sm:text-[14px] text-slate-600">
                            The more you type, the more we pretend to care. Minimum{" "}
                            <span className="text-rose-500 font-semibold">20 characters</span>, maximum
                            emotional damage.
                        </p>

                        {/* tiny checklist annoyance */}
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                            <span className="rounded-full bg-white/80 border border-amber-200 px-2 py-0.5">
                                ☐ Overthinking enabled
                            </span>
                            <span className="rounded-full bg-white/80 border border-sky-200 px-2 py-0.5">
                                ☐ Unnecessary context added
                            </span>
                            <span className="rounded-full bg-white/80 border border-rose-200 px-2 py-0.5">
                                ☐ Therapist would be concerned
                            </span>
                        </div>
                    </div>

                    {/* fake "review" stamp */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -6, y: -4 }}
                        animate={{ opacity: 1, rotate: -4, y: 0 }}
                        className="inline-flex items-center gap-2 rounded-full border border-rose-400/70 bg-rose-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-rose-500"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                        pending over-analysis
                    </motion.div>
                </div>

                {/* TEXTAREA */}
                <div className="relative mt-2 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                        <label className="text-xs sm:text-[13px] font-semibold uppercase tracking-wide text-slate-700 flex items-center gap-1.5">
                            <ClipboardList className="h-3.5 w-3.5 text-amber-500" />
                            Main question details
                        </label>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500">
                            <span>Characters:</span>
                            <motion.span
                                key={length}
                                initial={{ scale: 0.9, opacity: 0.7 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className={`font-semibold ${length < 20 ? "text-rose-500" : "text-emerald-600"
                                    }`}
                            >
                                {length}
                            </motion.span>
                            <span className="text-slate-500">/ 20 min</span>
                        </div>
                    </div>

                    <div className="relative">
                        <textarea
                            value={form.query}
                            onChange={(e) => onChange({ query: e.target.value })}
                            placeholder="E.g. “I need a pizza recipe, but also an explanation of life, and it’s due in 3 hours…”"
                            className="min-h-[140px] w-full rounded-2xl border border-rose-200 bg-white/90 px-3.5 py-2.5 text-[13px] sm:text-[14px] text-slate-800 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 shadow-inner"
                        />

                        {/* tiny warning at bottom right */}
                        {length > 0 && length < 20 && (
                            <motion.div
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="pointer-events-none absolute -bottom-4 right-1 rounded-full bg-rose-100 px-2 py-0.5 text-[10px] text-rose-700 border border-rose-300"
                            >
                                needs more chaos
                            </motion.div>
                        )}
                    </div>

                    {length < 20 && (
                        <div className="mt-2 flex items-start gap-2 text-[11px] sm:text-[12px] text-rose-600">
                            <AlertTriangle className="mt-[2px] h-3.5 w-3.5 text-rose-500" />
                            <p>
                                Your question currently looks normal and reasonable. This app is not
                                built for that. Please add more confusion, context, or drama.
                            </p>
                        </div>
                    )}
                </div>

                {/* URGENCY SLIDER */}
                <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                        <label className="text-xs sm:text-[13px] font-semibold uppercase tracking-wide text-slate-700 flex items-center gap-1.5">
                            <Gauge className="h-3.5 w-3.5 text-emerald-500" />
                            Urgency level
                        </label>
                        <span className="text-[11px] sm:text-[12px] text-slate-600">
                            Current mood:{" "}
                            <span className="text-emerald-600 font-medium">{urgencyText}</span>
                        </span>
                    </div>

                    <div className="relative px-1 pt-1">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={form.urgency}
                            onChange={(e) => onChange({ urgency: Number(e.target.value) })}
                            className="w-full accent-rose-400"
                        />

                        <motion.div
                            key={form.urgency}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-[10px] sm:text-[11px] text-slate-600"
                        >
                            {form.urgency <= 25 &&
                                "You’ll probably forget about this tab in 10 minutes."}
                            {form.urgency > 25 &&
                                form.urgency <= 50 &&
                                "Mild panic detected. Still enough time to scroll Instagram."}
                            {form.urgency > 50 &&
                                form.urgency <= 75 &&
                                "Tabs are opening. Deadlines suddenly feel real."}
                            {form.urgency > 75 &&
                                "We can’t fix this, but we can respectfully watch you suffer."}
                        </motion.div>
                    </div>
                </div>

                {/* IGNORE CHANCE */}
                <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                        <label className="text-xs sm:text-[13px] font-semibold uppercase tracking-wide text-slate-700">
                            How likely are you to ignore the results?
                        </label>
                        <span className="text-[11px] sm:text-[12px] text-slate-500">
                            Honest answers appreciated. Judgement: guaranteed.
                        </span>
                    </div>

                    <select
                        value={form.ignoreChance}
                        onChange={(e) => onChange({ ignoreChance: e.target.value })}
                        className="w-full rounded-xl border border-rose-200 bg-white/90 px-3 py-2 text-[13px] sm:text-[14px] text-slate-800 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    >
                        <option value="0%">0% — I’m weirdly serious about this</option>
                        <option value="25%">25% — I’ll skim and pretend I read</option>
                        <option value="60%">60% — Just here for vibes</option>
                        <option value="100%">100% — I love wasting both our time</option>
                    </select>
                </div>

                {/* FOOTER BUTTONS */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                        type="button"
                        onClick={onBack}
                        className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-[12px] sm:text-[13px] font-medium text-slate-700 hover:bg-rose-50"
                    >
                        ← Back
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3.5 py-1.5 text-[12px] sm:text-[13px] font-semibold text-white shadow-md shadow-rose-300/70 hover:bg-rose-400 hover:-translate-y-0.5 active:scale-[0.97] transition-all"
                    >
                        Proceed with oversharing
                    </button>

                    <p className="text-[10px] sm:text-[11px] text-slate-500">
                        Note: This level of detail would terrify any real support agent.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default QueryFormStep;
