import React, { useState } from "react";

function VerificationStep({ onNext, onBack, setMessage }) {
    const [selectedIds, setSelectedIds] = useState([]);

    const fakeImages = [
        {
            id: 0,
            label: "Possibly-Cat Fragment 1",
            sub: "Schrödinger-approved shape.",
            chaos: "98% ambiguous",
            emoji: "🐈‍⬛",
            layout: { order: 2, wide: true },
        },
        {
            id: 1,
            label: "Possibly-Cat Fragment 2",
            sub: "Looks wrong, feels right.",
            chaos: "Emotionally cat-like",
            emoji: "🪅",
            layout: { order: 1, wide: false },
        },
        {
            id: 2,
            label: "Possibly-Cat Fragment 3",
            sub: "Schrödinger-approved shape.",
            chaos: "Emotionally cat-like",
            emoji: "🐾",
            layout: { order: 4, wide: false },
        },
        {
            id: 3,
            label: "Possibly-Cat Fragment 4",
            sub: "Looks wrong, feels right.",
            chaos: "Certified confusion",
            emoji: "🌚",
            layout: { order: 3, wide: true },
        },
        {
            id: 4,
            label: "Possibly-Cat Fragment 5",
            sub: "Schrödinger-approved shape.",
            chaos: "Emotionally cat-like",
            emoji: "🌀",
            layout: { order: 6, wide: false },
        },
        {
            id: 5,
            label: "Possibly-Cat Fragment 6",
            sub: "Looks wrong, feels right.",
            chaos: "Emotionally cat-like",
            emoji: "😼",
            layout: { order: 5, wide: false },
        },
    ];

    function toggle(id) {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    }

    function handleNext() {
        if (selectedIds.length === 0) {
            setMessage("Bold of you to think you’re above the process.");
        } else {
            setMessage("Interesting choice. We respect your creativity.");
        }
        setTimeout(() => {
            setMessage("");
            onNext();
        }, 1000);
    }

    const suspicion =
        selectedIds.length === 0
            ? "High"
            : selectedIds.length < 3
                ? "Medium–High"
                : "Reduced (barely)";

    return (
        <div className="relative h-full w-full px-2 py-2">
            {/* pastel background spread */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-16 -left-10 h-40 w-40 rounded-[45%] bg-rose-200/60 blur-3xl" />
                <div className="absolute -bottom-20 right-0 h-48 w-48 rounded-[45%] bg-sky-200/60 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-amber-100/80 blur-3xl" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 p-4 sm:p-5 shadow-[0_18px_45px_rgba(248,113,113,0.35)]">
                {/* tiny doodles */}
                <span className="pointer-events-none absolute -top-3 left-3 text-3xl opacity-60">
                    🐈‍⬛
                </span>
                <span className="pointer-events-none absolute bottom-0 right-4 text-3xl opacity-60">
                    🎲
                </span>

                <div className="relative flex flex-col lg:flex-row gap-5">
                    {/* side illustration (lg+) */}
                    <div className="hidden lg:flex flex-col items-center justify-center flex-[0.85]">
                        <div className="relative w-full max-w-xs rounded-3xl bg-white/80 border border-rose-200 shadow-md px-4 py-5 overflow-hidden">
                            <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
                                <span className="inline-flex items-center gap-1">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    Image Verification
                                </span>
                                <span className="text-[10px]">Beta · Very Useless</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-3">
                                <div className="aspect-square rounded-2xl bg-rose-50 flex items-center justify-center text-3xl">
                                    🐈
                                </div>
                                <div className="aspect-square rounded-2xl bg-amber-50 flex items-center justify-center text-3xl">
                                    🧩
                                </div>
                                <div className="aspect-square rounded-2xl bg-sky-50 flex items-center justify-center text-3xl">
                                    😼
                                </div>
                            </div>

                            <p className="text-[11px] text-slate-600">
                                “Select all squares that spiritually feel like a cat but also
                                might be a chair.” – UX team, probably.
                            </p>

                            <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                                <span>Attempts left: ∞</span>
                                <span className="italic">Success not guaranteed</span>
                            </div>
                        </div>
                    </div>

                    {/* main panel */}
                    <div className="flex-1">
                        {/* header */}
                        <div className="relative flex flex-wrap items-start justify-between gap-3">
                            <div className="max-w-xl space-y-2">
                                <p className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-[11px] sm:text-[12px] font-medium text-slate-700 shadow-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Step 4 · Human(?) Verification
                                </p>
                                <h2 className="text-[18px] sm:text-[22px] font-semibold text-slate-900">
                                    Prove you’re not a mildly confused robot
                                </h2>
                                <p className="text-[12px] sm:text-[14px] text-slate-600">
                                    Select all tiles that{" "}
                                    <span className="font-semibold text-rose-600">
                                        do not contain a cat
                                    </span>{" "}
                                    but{" "}
                                    <span className="italic">
                                        could spiritually be a cat in another universe.
                                    </span>
                                </p>

                                <p className="text-[11px] text-slate-500">
                                    Time limit:{" "}
                                    <span className="line-through">30 seconds</span> unlimited.{" "}
                                    Stress level:{" "}
                                    <span className="text-rose-500 font-semibold">max</span>.
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-1 text-[10px] text-slate-600">
                                <span className="rounded-full border border-rose-200 bg-white/80 px-3 py-1 shadow-sm">
                                    AI suspicion level:{" "}
                                    <span className="text-rose-500 font-semibold">
                                        {suspicion}
                                    </span>
                                </span>
                                <span className="rounded-full border border-sky-200 bg-white/80 px-3 py-1 shadow-sm">
                                    Compliance score:{" "}
                                    <span className="text-emerald-600 font-semibold">
                                        {selectedIds.length * 13}% chaotic
                                    </span>
                                </span>
                                <span className="text-[9px] text-slate-500">
                                    Actual security: <span className="line-through">enabled</span>{" "}
                                    imaginary
                                </span>
                            </div>
                        </div>

                        {/* toolbar */}
                        <div className="mt-4 flex items-center justify-between rounded-2xl border border-rose-200 bg-white/80 px-3 py-2 text-[10px] sm:text-[11px] text-slate-600">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-base">
                                    📷
                                </span>
                                <span className="font-medium truncate max-w-[130px] sm:max-w-none">
                                    cat-captcha_v3.png
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="rounded-full bg-rose-50 px-2 py-0.5">
                                    Mode: <span className="font-semibold">Chaos Vision</span>
                                </span>
                                <span className="hidden sm:inline text-[10px] text-slate-500">
                                    Zoom: 97% | Clarity: 2%
                                </span>
                            </div>
                        </div>

                        {/* CHAOTIC-BUT-RESPONSIVE grid */}
                        <div className="relative mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {fakeImages.map((img) => {
                                const isActive = selectedIds.includes(img.id);

                                // Random height for chaos effect
                                const minHeight = Math.floor(Math.random() * 60) + 100; // 100px → 160px

                                return (
                                    <button
                                        key={img.id}
                                        type="button"
                                        onClick={() => toggle(img.id)}
                                        className={`
          group relative flex flex-col justify-between
          rounded-2xl border px-3 py-3
          text-left text-[11px] sm:text-[12px]
          transition-all duration-150 bg-white/90 hover:bg-white
          ${isActive
                                                ? "border-amber-400 shadow-[0_0_0_2px_rgba(251,191,36,0.5)] z-10"
                                                : "border-rose-200 hover:border-rose-300"
                                            }
        `}
                                        style={{
                                            minHeight: `${minHeight}px`,
                                        }}
                                    >
                                        {isActive && (
                                            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl border border-amber-300/80 blur-[1px]" />
                                        )}

                                        <div className="flex flex-col justify-between h-full">
                                            <div className="flex items-start gap-2">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 text-lg">
                                                    {img.emoji}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="inline-flex items-center gap-1 text-slate-900 font-medium">
                                                        <span className="text-xs">{isActive ? "✅" : "❓"}</span>
                                                        {img.label}
                                                    </span>
                                                    <span className="mt-0.5 text-slate-600">{img.sub}</span>
                                                </div>
                                            </div>
                                            <span className="mt-2 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[9px] text-amber-700 whitespace-nowrap">
                                                {img.chaos}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>



                        {/* helper text */}
                        <p className="mt-3 text-[11px] sm:text-[12px] text-slate-600">
                            Fun fact: This verification step is{" "}
                            <span className="text-emerald-600 font-semibold">not connected</span> to
                            any real security system. It just judges your vibes, aesthetic, and
                            ability to click random boxes.
                        </p>

                        {/* buttons */}
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            <button
                                type="button"
                                onClick={onBack}
                                className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-[12px] sm:text-[13px] font-medium text-slate-700 hover:bg-rose-50 transition"
                            >
                                ← Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="inline-flex items(worker-center gap-1 rounded-full bg-rose-500 px-3.5 py-1.5 text-[12px] sm:text-[13px] font-semibold text-white shadow-md shadow-rose-300/70 hover:bg-rose-400 hover:-translate-y-0.5 active:scale-[0.97] transition-all"
                            >
                                Next
                                <span className="text-xs">→</span>
                            </button>
                            <span className="text-[10px] sm:text-[11px] text-slate-500">
                                Tip: There is no correct answer. Only vibes.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerificationStep;
