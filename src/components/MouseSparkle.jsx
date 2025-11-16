import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function MouseSparkle() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        function handleMouseMove(e) {
            x.set(e.clientX);
            y.set(e.clientY);
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <motion.div
            className="w-3 h-3 bg-amber-300 rounded-full pointer-events-none shadow-xl fixed top-0 left-0"
            style={{
                x: x,
                y: y,
            }}
            animate={{ scale: [1, 2, 1] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
        />
    );
}
