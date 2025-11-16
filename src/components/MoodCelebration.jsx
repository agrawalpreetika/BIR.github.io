import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MOOD_STYLES = {
    mild: {
        bg: "rgba(148, 163, 184, 0.8)", // slate-ish
        emojis: ["🥲", "💤", "☕️", "📚"],
        label: "Mildly Dead Inside",
        sub: "Sem end vibes detected.",
    },
    memes: {
        bg: "rgba(251, 191, 36, 0.8)", // amber-ish
        emojis: ["🤡", "😂", "📱", "🎭"],
        label: "Certified Meme Consumer",
        sub: "Screenshots > textbooks, we see you.",
    },
    angry: {
        bg: "rgba(248, 113, 113, 0.85)", // red-ish
        emojis: ["😡", "🔥", "💢", "🧨"],
        label: "Rage Googling Mode",
        sub: "The search bar did nothing wrong.",
    },
    overthink: {
        bg: "rgba(129, 140, 248, 0.8)", // indigo-ish
        emojis: ["🧠", "💭", "📎", "📚"],
        label: "Overthinking Activated",
        sub: "27 tabs opened. 0 answers.",
    },
    default: {
        bg: "rgba(244, 114, 182, 0.8)", // pink-ish
        emojis: ["✨", "🌸", "⭐️", "🎈"],
        label: "Vibe Registered",
        sub: "Custom chaos saved.",
    },
};

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

export default function MoodCelebration({ mood, show, onEnd }) {
    const config = MOOD_STYLES[mood] || MOOD_STYLES.default;

    React.useEffect(() => {
        if (!show) return;
        const timeout = setTimeout(() => {
            onEnd?.();
        }, 1800);
        return () => clearTimeout(timeout);
    }, [show, onEnd]);

    const particles = React.useMemo(() => {
        if (!show) return [];
        return Array.from({ length: 26 }).map((_, i) => ({
            id: i,
            emoji: config.emojis[i % config.emojis.length],
            x: randomBetween(0, 100),
            delay: randomBetween(0, 0.4),
            duration: randomBetween(1.1, 1.6),
            startY: randomBetween(-10, 10),
            endY: randomBetween(60, 110),
            rotate: randomBetween(-25, 25),
            scale: randomBetween(0.8, 1.4),
        }));
    }, [show, config.emojis]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[999] h-[100%] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* tinted blur backdrop */}
                    <motion.div
                        className="absolute inset-0 backdrop-blur-[3px]"
                        style={{ backgroundColor: config.bg }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    />

                    {/* floating emoji rain */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        {particles.map((p) => (
                            <motion.span
                                key={p.id}
                                className="absolute text-3xl sm:text-4xl"
                                style={{ left: `${p.x}%` }}
                                initial={{
                                    y: p.startY + "%",
                                    opacity: 0,
                                    scale: p.scale,
                                    rotate: 0,
                                }}
                                animate={{
                                    y: p.endY + "%",
                                    opacity: [0, 1, 0],
                                    rotate: p.rotate,
                                }}
                                transition={{
                                    duration: p.duration,
                                    delay: p.delay,
                                    ease: "easeOut",
                                }}
                            >
                                {p.emoji}
                            </motion.span>
                        ))}
                    </div>

                    {/* central content */}
                    <motion.div
                        className="relative z-[1000] flex flex-col items-center text-center px-6"
                        initial={{ scale: 0.7, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.8, y: -10, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        <motion.div
                            className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-white/70 text-5xl sm:text-6xl"
                            animate={{
                                scale: [1, 1.12, 1],
                                rotate: [-3, 3, 0],
                            }}
                            transition={{
                                duration: 0.9,
                                repeat: 1,
                                ease: "easeInOut",
                            }}
                        >
                            {config.emojis[0]}
                        </motion.div>

                        <motion.h2
                            className="mt-4 text-xl sm:text-2xl font-semibold text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            {config.label}
                        </motion.h2>
                        <motion.p
                            className="mt-1 text-xs sm:text-sm text-white/90 max-w-md"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18 }}
                        >
                            {config.sub}
                        </motion.p>

                        <motion.div
                            className="mt-3 rounded-full bg-white/90 px-4 py-1.5 text-[11px] sm:text-xs text-slate-700 shadow-md"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                        >
                            Settings saved. Returning you to ✨functional chaos✨…
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
