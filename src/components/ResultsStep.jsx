// src/components/ResultsStep.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

function ResultsStep({ form, onBack, onNext }) {
    const baseQuery = form.query || "your deeply unspecified question";

    const suffixes = [
        "…that might slightly help.",
        "…but you may regret reading it.",
        "…generated under emotional distress.",
        "…approved by 0 certified experts.",
    ];

    const [results, setResults] = useState([]);
    const ignore = form.ignoreChance || "0%";

    useEffect(() => {
        const generated = Array.from({ length: 5 }, (_, i) => ({
            id: i,
            title: `${baseQuery} ${suffixes[i % suffixes.length]}`,
            snippet:
                "This answer was crafted by the B.I.R. Department of Overthinking. Any clarity is accidental.",
            url: `https://bir.example/result/${i + 1}`,
        }));
        setResults(generated);
    }, [baseQuery]);

    // Floating 3D rotation helper
    const floatingVariants = {
        hover: { rotateX: 5, rotateY: 5, scale: 1.03, transition: { type: "spring", stiffness: 300 } },
        initial: { rotateX: 0, rotateY: 0 },
    };

    return (
        <div className="relative h-full w-full p-5 overflow-hidden bg-gradient-to-br from-white via-sky-50 to-pink-50">
            {/* Soft floating background */}
            <motion.div
                className="pointer-events-none absolute -top-24 -left-20 h-44 w-44 rounded-full bg-amber-200/50 blur-3xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="pointer-events-none absolute -bottom-24 right-10 h-40 w-40 rounded-full bg-rose-200/50 blur-3xl"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            {/* Header */}
            <div className="relative z-10 mb-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-800 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Step 6 · Final Bureaucratic Review
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">Your Officially Over-Processed Results</h2>
                <p className="mt-1 text-sm text-slate-600">
                    Search took <span className="font-semibold text-emerald-400">4.2s</span>. Bureaucratic delay added{" "}
                    <span className="font-semibold text-amber-400">3m 47s</span>.
                </p>
            </div>

            {/* Ignore / vibes meter */}
            <div className="relative z-10 mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between text-sm text-slate-600">
                    <span className="flex items-center gap-2">🧪 Bureau Vibes Analysis</span>
                    <span className="text-rose-400 font-semibold">Ignore probability: {ignore}</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <motion.div
                        className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400 animate-pulse"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                    Conclusion: You will probably skim this and then open social media.
                </p>
            </div>

            {/* Results cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {results.map((r, idx) => (
                    <motion.button
                        key={r.id}
                        type="button"
                        onClick={() => window.open(r.url, "_blank")}
                        className="relative rounded-xl border border-slate-300 bg-white p-4 shadow-lg cursor-pointer text-left hover:shadow-2xl transition"
                        variants={floatingVariants}
                        whileHover="hover"
                        initial="initial"
                        layout
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">#{idx + 1}</span>
                            <span className="font-semibold text-slate-900 line-clamp-1">{r.title}</span>
                        </div>
                        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{r.snippet}</p>
                        <p className="mt-1 text-xs text-emerald-400 break-all">{r.url}</p>
                    </motion.button>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between gap-3">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-sky-50 transition"
                >
                    ← Back
                </button>
                <button
                    onClick={onNext}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:bg-emerald-300 transition"
                >
                    Complete Search <FiArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default ResultsStep;
