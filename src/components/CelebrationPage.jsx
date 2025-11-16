import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import MouseSparkle from "./MouseSparkle.jsx";

export default function CelebrationPage({ onRestart }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Track mouse movement for sparkle trail / 3D parallax
    useEffect(() => {
        const handleMouse = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, [x, y]);

    // Simple 3D rotation based on mouse
    const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
    const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);

    // Floating random emojis
    const emojis = ["🎉", "✨", "🥳", "🍕", "💻", "🤯"];
    const randomEmojis = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
        rotate: Math.random() * 360,
    }));

    return (
        <div className="relative w-full h-full bg-gradient-to-br from-rose-200 via-amber-100 to-sky-200 overflow-hidden">
            {/* Floating sparkles */}
            {randomEmojis.map((e) => (
                <motion.div
                    key={e.id}
                    className="absolute text-3xl pointer-events-none select-none"
                    initial={{ opacity: 0, y: 0, rotate: 0 }}
                    animate={{
                        y: ["0%", "50%", "0%"],
                        rotate: [0, e.rotate, -e.rotate, 0],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: e.duration,
                        delay: e.delay,
                    }}
                    style={{ left: e.x, top: e.y }}
                >
                    {e.emoji}
                </motion.div>
            ))}

            {/* Mouse-follow sparkle */}
            <motion.div
                className="w-3 h-3 bg-amber-300 rounded-full pointer-events-none shadow-xl"
                style={{
                    x: x,
                    y: y,
                }}
                animate={{ scale: [1, 2, 1] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
            />

            {/* Sparkles */}
            <MouseSparkle />
            <MouseSparkle />
            <MouseSparkle />

            {/* Main celebration card */}
            <div className="relative flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-rose-200 via-amber-100 to-sky-200 overflow-hidden">
                {/* Floating sparkles / mouse trail here */}

                <motion.div
                    style={{ rotateX, rotateY, perspective: 800 }}
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
