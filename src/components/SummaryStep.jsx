// import React from "react";
// import { motion } from "framer-motion";

// function SummaryStep({ form, onBack, onEditAll, onConfirm }) {
//     const hasQuery = form.query && form.query.trim().length > 0;
//     const hasMood = form.mood;

//     const prettyMood = (key) =>
//     ({
//         mild: "🥲 Mildly Dead Inside",
//         memes: "🤡 Just Here for Memes",
//         angry: "😡 Angrily Googling",
//         overthink: "🧠 Overthinking Everything",
//         delulu: "✨ Delulu but Confident",
//         chill: "🧋 Suspiciously Chill",
//         burnout: "🔥 Burnout Speedrun",
//     }[key] || "emotionally mysterious");

//     const prettySearchType = (key) =>
//     ({
//         stalk: "Stalking an Ex",
//         panic: "Last Minute Assignment Panic",
//         pretend: "Pretending to be Productive at Work",
//         exist: "Existential Crisis / Life Meaning",
//         bored: "I’m Bored and Just Clicking Things",
//     }[key] || "Unspecified Chaos");

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="relative h-full w-full px-3 sm:px-6 py-4 bg-slate-50"
//         >
//             {/* soft glowing background */}
//             <div className="pointer-events-none absolute inset-0 -z-10">
//                 <div className="absolute -top-16 -left-8 h-40 w-40 rounded-[45%] bg-amber-200/50 blur-3xl animate-pulse-slow" />
//                 <div className="absolute -bottom-16 right-0 h-44 w-44 rounded-[45%] bg-rose-200/50 blur-3xl animate-pulse-slow delay-2000" />
//                 <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-100/70 blur-3xl animate-pulse-slow delay-1000" />
//             </div>

//             <div className="relative space-y-6">
//                 {/* Header */}
//                 <div className="space-y-2">
//                     <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12px] font-medium text-amber-800 shadow-sm border border-amber-200">
//                         <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
//                         Step 6 · Final Bureaucratic Review
//                     </p>
//                     <h2 className="text-[22px] sm:text-[26px] font-semibold text-slate-900">
//                         Please confirm the summary of your request
//                     </h2>
//                     <p className="text-[14px] sm:text-[15px] text-slate-600">
//                         This is the part where we pretend{" "}
//                         <span className="text-rose-500 font-semibold">accuracy matters</span> before
//                         sending your chaos into the void.
//                     </p>
//                 </div>

//                 {/* Cards: Mood + Query */}
//                 <div className="grid gap-4 sm:grid-cols-2">
//                     {/* Mood Card */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.1 }}
//                         className="rounded-2xl border border-rose-200/40 bg-white p-4 shadow-md flex flex-col gap-2"
//                     >
//                         <p className="text-[12px] text-slate-400 uppercase tracking-wide">Your Mood</p>
//                         <p className="text-[16px] font-semibold text-rose-600">
//                             {hasMood ? prettyMood(form.mood) : "No mood selected"}
//                         </p>
//                         <p className="text-[11px] text-slate-500">
//                             Impact on actual results: <span className="font-semibold">0%</span>. Impact on drama: <span className="font-semibold">300%</span>.
//                         </p>
//                     </motion.div>

//                     {/* Query Card */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="rounded-2xl border border-indigo-200/40 bg-white p-4 shadow-md flex flex-col gap-2"
//                     >
//                         <p className="text-[12px] text-slate-400 uppercase tracking-wide">Search Context</p>
//                         <p className="font-medium text-amber-500">{prettySearchType(form.searchType)}</p>
//                         <p className="mt-2 text-[13px] border-l-2 border-amber-300 pl-2 text-slate-700 italic">
//                             “{hasQuery ? form.query : "No query provided"}”
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* Urgency + Ignore chance */}
//                 <div className="flex flex-wrap gap-3 mt-2">
//                     <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-[12px] font-medium text-amber-600">
//                         Urgency: <span className="font-semibold">{form.urgency}/100</span>
//                     </span>
//                     <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-[12px] font-medium text-rose-500">
//                         Chance you ignore results: <span className="font-semibold">{form.ignoreChance}</span>
//                     </span>
//                 </div>

//                 {/* Fun note */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     className="rounded-xl border border-slate-200/30 bg-white/80 p-3 shadow-inner text-[12px] text-slate-700"
//                 >
//                     <p>
//                         Do you solemnly swear this <span className="text-emerald-500 font-semibold">represents your truth</span>, or at least your
//                         dramatic interpretation? 😎
//                     </p>
//                 </motion.div>

//                 {/* Buttons */}
//                 <div className="flex flex-wrap items-center gap-3 mt-3">
//                     <button
//                         onClick={onEditAll}
//                         className="rounded-full border border-rose-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-rose-50 transition"
//                     >
//                         ✏️ Edit My Choices
//                     </button>
//                     <button
//                         onClick={onBack}
//                         className="rounded-full border border-rose-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-rose-50 transition"
//                     >
//                         ← Back
//                     </button>
//                     <button
//                         onClick={onConfirm}
//                         className="rounded-full bg-rose-500 px-4 py-2 text-[13px] font-semibold text-white shadow-md shadow-rose-300/70 hover:bg-rose-400 active:scale-[0.97] transition-all"
//                     >
//                         ✅ I Confirm This Chaos
//                     </button>
//                     <span className="text-[10px] text-slate-500">
//                         Note: Confirmation does not guarantee emotional stability.
//                     </span>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }

// export default SummaryStep;


import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function SummaryStep({ form, onBack, onEditAll, onConfirm }) {
    const [isShy, setIsShy] = useState(true);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const buttonRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => setIsShy(false), 20000);
        return () => clearTimeout(timer);
    }, []);

    // Animate button chaos
    useEffect(() => {
        if (isShy) {
            const loop = () => {
                controls.start({
                    rotate: Math.random() * 30 - 15, // rotate -15° to 15°
                    scale: 1 + Math.random() * 0.3,  // scale 1x to 1.3x
                    transition: { duration: 0.3, ease: "easeInOut" },
                }).then(loop);
            };
            loop();
        } else {
            controls.start({ rotate: 0, scale: 1, transition: { duration: 0.3 } });
        }
    }, [isShy, controls]);

    const handleMouseMove = (e) => {
        if (!isShy || !buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        const distX = e.clientX - buttonX;
        const distY = e.clientY - buttonY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 120) {
            const offsetX = (Math.random() - 0.5) * 200;
            const offsetY = (Math.random() - 0.5) * 100;
            setPos({
                x: Math.min(Math.max(pos.x + offsetX, -100), 100),
                y: Math.min(Math.max(pos.y + offsetY, -50), 50),
            });
        }
    };

    const hasQuery = form.query && form.query.trim().length > 0;
    const hasMood = form.mood;

    const prettyMood = (key) =>
    ({
        mild: "🥲 Mildly Dead Inside",
        memes: "🤡 Just Here for Memes",
        angry: "😡 Angrily Googling",
        overthink: "🧠 Overthinking Everything",
        delulu: "✨ Delulu but Confident",
        chill: "🧋 Suspiciously Chill",
        burnout: "🔥 Burnout Speedrun",
    }[key] || "emotionally mysterious");

    const prettySearchType = (key) =>
    ({
        stalk: "Stalking an Ex",
        panic: "Last Minute Assignment Panic",
        pretend: "Pretending to be Productive at Work",
        exist: "Existential Crisis / Life Meaning",
        bored: "I’m Bored and Just Clicking Things",
    }[key] || "Unspecified Chaos");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative h-full w-full px-3 sm:px-6 py-4 bg-slate-50"
            onMouseMove={handleMouseMove}
        >
            {/* Header */}
            <div className="space-y-2">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12px] font-medium text-amber-800 shadow-sm border border-amber-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Step 6 · Final Bureaucratic Review
                </p>
                <h2 className="text-[22px] sm:text-[26px] font-semibold text-slate-900">
                    Please confirm the summary of your request
                </h2>
                <p className="text-[14px] sm:text-[15px] text-slate-600">
                    This is the part where we pretend{" "}
                    <span className="text-rose-500 font-semibold">accuracy matters</span> before
                    sending your chaos into the void.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <div className="rounded-2xl border border-rose-200/40 bg-white p-4 shadow-md flex flex-col gap-2">
                    <p className="text-[12px] text-slate-400 uppercase tracking-wide">Your Mood</p>
                    <p className="text-[16px] font-semibold text-rose-600">
                        {hasMood ? prettyMood(form.mood) : "No mood selected"}
                    </p>
                    <p className="text-[11px] text-slate-500">
                        Impact on actual results: <span className="font-semibold">0%</span>. Impact on drama: <span className="font-semibold">300%</span>.
                    </p>
                </div>

                <div className="rounded-2xl border border-indigo-200/40 bg-white p-4 shadow-md flex flex-col gap-2">
                    <p className="text-[12px] text-slate-400 uppercase tracking-wide">Search Context</p>
                    <p className="font-medium text-amber-500">{prettySearchType(form.searchType)}</p>
                    <p className="mt-2 text-[13px] border-l-2 border-amber-300 pl-2 text-slate-700 italic">
                        “{hasQuery ? form.query : "No query provided"}”
                    </p>
                </div>
            </div>

            {/* Fun note */}
            <div className="rounded-xl border border-slate-200/30 bg-white/80 p-3 shadow-inner text-[12px] text-slate-700 mt-3">
                Do you solemnly swear this <span className="text-emerald-500 font-semibold">represents your truth</span>, or at least your dramatic interpretation? 😎
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-6 justify-center relative">
                <button
                    onClick={onEditAll}
                    className="rounded-full border border-rose-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-rose-50 transition"
                >
                    ✏️ Edit My Choices
                </button>
                <button
                    onClick={onBack}
                    className="rounded-full border border-rose-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-rose-50 transition"
                >
                    ← Back
                </button>

                <motion.button
                    ref={buttonRef}
                    onClick={onConfirm}
                    animate={controls}
                    style={{
                        x: pos.x,
                        y: pos.y,
                        position: "relative",
                    }}
                    className="rounded-full bg-rose-500 px-4 py-2 text-[13px] font-semibold text-white shadow-md shadow-rose-300/70 hover:bg-rose-400 active:scale-[0.97] transition-all"
                >
                    ✅ I Confirm This Chaos
                </motion.button>
            </div>
        </motion.div>
    );
}

export default SummaryStep;
