import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CelebrationPage({ onRestart }) {
    const [sparkles, setSparkles] = useState([]);

    // Track mouse position and add sparkles
    useEffect(() => {
        const handleMouse = (e) => {
            const newSparkles = Array.from({ length: 5 }).map(() => ({
                id: Date.now() + Math.random(),
                x: e.clientX + (Math.random() - 0.5) * 10, // small random offset
                y: e.clientY + (Math.random() - 0.5) * 10,
                size: Math.random() * 6 + 4, // 4-14px, bigger sparkles
                color: `hsl(${Math.random() * 360}, 100%, 70%)`, // rainbow colors
            }));

            setSparkles((prev) => [...prev, ...newSparkles].slice(-150)); // keep last 150
        };

        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    // Random floating emojis
    const emojis = ["🎉", "✨", "🥳", "🍕", "💻", "🤯"];
    const randomEmojis = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotate: Math.random() * 360,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
    }));

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-rose-200 via-amber-100 to-sky-200 overflow-hidden">
            {/* Floating emojis */}
            {randomEmojis.map((e) => (
                <motion.div
                    key={e.id}
                    className="absolute text-3xl pointer-events-none select-none"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                        y: ["0%", "50%", "0%"],
                        rotate: [0, e.rotate, -e.rotate, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: e.duration,
                        delay: e.delay,
                        ease: "easeInOut",
                    }}
                    style={{ left: e.x, top: e.y }}
                >
                    {e.emoji}
                </motion.div>
            ))}

            {/* Mouse-follow sparkle trail */}
            {sparkles.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute bg-amber-500 rounded-full pointer-events-none"
                    initial={{ opacity: 1, scale: 3 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        width: s.size,
                        height: s.size,
                        left: s.x - s.size / 2,
                        top: s.y - s.size / 2,
                        backgroundColor: s.color,
                        boxShadow: `0 0 ${s.size}px ${s.color}`,
                    }}
                />
            ))}

            {/* Celebration Card */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0, rotate: -10, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    className="relative mx-auto rounded-3xl bg-white/90 border border-rose-200 p-10 shadow-[0_18px_55px_rgba(148,163,184,0.55)] flex flex-col justify-center items-center gap-6 w-96"
                >
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-500 animate-bounce">
                        🎉 YAY! You Survived the Search Chaos! 🎉
                    </h1>
                    <p className="text-center text-lg text-slate-700">
                        You navigated 7 ridiculous steps, picked moods, answered bizarre
                        questions, and survived the B.I.R. bureaucracy. Congrats! 🥳
                    </p>

                    {/* Shimmering progress bar */}
                    <div className="w-full mt-4 h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                            className="h-full w-full bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 animate-shimmer"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                    </div>

                    {/* Restart button */}
                    <motion.button
                        onClick={onRestart}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 rounded-full bg-emerald-500 px-6 py-2 text-white font-semibold shadow-lg hover:bg-emerald-400 transition-all"
                    >
                        Restart Adventure 🔄
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
