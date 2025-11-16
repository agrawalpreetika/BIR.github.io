import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    FileSearch,
    Eye,
    AlarmClock,
    Flame,
    Bug,
    Laptop2,
    Briefcase,
    Sparkles,
    Orbit,
    MoonStar,
    Coffee,
    Cloudy,
    SlidersHorizontal,
} from "lucide-react";

function getMoodConfig(moodKey) {
    switch (moodKey) {
        case "stalk":
            return {
                bg: "rgba(15,23,42,0.94)",
                title: "Calibrating investigation mode…",
                subtitle: "Enhancing zoom level, pretending not to judge.",
                icons: [Search, FileSearch, Eye],
            };
        case "panic":
            return {
                bg: "rgba(248,113,113,0.93)", // panic red
                title: "Entering panic-friendly layout…",
                subtitle: "Highlighting deadlines, hiding peace of mind.",
                icons: [AlarmClock, Flame, Bug],
            };
        case "pretend":
            return {
                bg: "rgba(59,130,246,0.92)", // corporate blue
                title: "Activating fake productivity mode…",
                subtitle: "Making everything look busy. Results unchanged.",
                icons: [Laptop2, Briefcase, SlidersHorizontal],
            };
        case "exist":
            return {
                bg: "rgba(30,64,175,0.93)", // deep blue
                title: "Tuning existential search field…",
                subtitle: "Adding stars, removing clear answers.",
                icons: [Orbit, MoonStar, Cloudy],
            };
        case "bored":
            return {
                bg: "rgba(148,163,184,0.93)", // lazy gray
                title: "Optimizing for bored scrolling…",
                subtitle: "Zero urgency detected. Loading maximum chill.",
                icons: [Coffee, Cloudy, Sparkles],
            };
        default:
            return {
                bg: "rgba(244, 114, 182, 0.93)", // pink
                title: "Locking in your chaos preset…",
                subtitle: "This mostly improves vibes, not answers.",
                icons: [Sparkles, Orbit, Coffee],
            };
    }
}

function FloatingIcon({ Icon }) {
    return (
        <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-white/95 shadow-[0_8px_25px_rgba(15,23,42,0.45)] border border-slate-200/90">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
        </div>
    );
}

function ChaosOverlay({ isLoading, selected }) {
    const moodKey = selected?.key;
    const config = getMoodConfig(moodKey);
    const Icons = config.icons;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[999] h-[100%] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}   // ⬅️ slower fade for whole overlay
                >
                    {/* tinted + blurred background */}
                    <motion.div
                        className="absolute inset-0 backdrop-blur-[6px]"
                        style={{ backgroundColor: config.bg }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}  // ⬅️ smoother bg fade
                    />

                    {/* falling icon confetti */}
                    <div className="pointer-events-none rounded-3xl absolute inset-0 overflow-hidden">
                        {Array.from({ length: 22 }).map((_, i) => {
                            const x = Math.random() * 100;
                            const delay = Math.random() * 0.5;        // ⬅️ a bit more stagger
                            const duration = 1.8 + Math.random() * 1; // ⬅️ ~1.8–2.8s fall
                            const IconComponent = Icons[i % Icons.length];

                            return (
                                <motion.div
                                    key={i}
                                    style={{ left: `${x}%` }}
                                    className="top-[-10%]"
                                    initial={{ y: "-12%", opacity: 0, scale: 0.9 }}
                                    animate={{
                                        y: "95%",
                                        opacity: [0, 1, 0.2, 0],
                                        rotate: [0, 12, -8, 4],
                                    }}
                                    transition={{
                                        duration,
                                        delay,
                                        ease: "easeOut",
                                    }}
                                >
                                    <FloatingIcon Icon={IconComponent} />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* center card */}
                    <motion.div
                        className="relative z-[1000] rounded-3xl flex flex-col items-center text-center px-6"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.94, y: -10, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}  // ⬅️ enter/exit smoother
                    >
                        <motion.div
                            className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-white/95 border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.8)]"
                            animate={{ scale: [1, 1.06, 1], rotate: [-3, 3, 0] }}
                            transition={{
                                duration: 1.6,             // ⬅️ slower breathing
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        >
                            <div className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-300 via-amber-300 to-sky-300">
                                <Sparkles className="h-5 w-5 text-slate-900/90" />
                            </div>
                        </motion.div>

                        <motion.p
                            className="mt-3 text-sm sm:text-base font-semibold text-slate-50"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                        >
                            {config.title}
                        </motion.p>
                        <motion.p
                            className="mt-1 text-[11px] sm:text-xs text-slate-100/80 max-w-xs"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.4 }}
                        >
                            {config.subtitle}
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ChaosOverlay;
