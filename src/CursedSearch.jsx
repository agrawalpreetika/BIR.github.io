import React, { useState, useEffect } from "react";
import LandingStep from "./components/LandingStep.jsx";
import SearchTypeStep from "./components/SearchTypeStep.jsx";
import MoodStep from "./components/MoodStep.jsx";
import QueryFormStep from "./components/QueryFormStep.jsx";
import VerificationStep from "./components/VerificationStep.jsx";
import SummaryStep from "./components/SummaryStep.jsx";
import ResultsStep from "./components/ResultsStep.jsx";
import CelebrationPage from "./components/CelebrationPage.jsx";
import { Toaster } from "react-hot-toast";


export default function CursedSearch() {

    const [step, setStep] = useState(0);

    const [form, setForm] = useState({
        searchType: "",
        mood: "",
        font: "",
        theme: "",
        query: "",
        urgency: 50,
        ignoreChance: "0%",
    });

    const [messages, setMessages] = useState("");

    function updateForm(patch) {
        setForm((prev) => ({ ...prev, ...patch }));
    }

    function nextStep() {
        setMessages("");
        setStep((s) => s + 1);
    }

    function prevStep() {
        setMessages("");
        setStep((s) => Math.max(0, s - 1));
    }

    const landingPhrases = [
        "You had one simple question. We made it 7 steps.",
        "Your curiosity is important to us. Your time is not.",
        "Warning: may cause giggles and mild rage.",
        "Achievement unlocked: Overcomplicating everything.",
        "Welcome! Please abandon all hope of efficiency.",
    ];

    const [landingPhrase, setLandingPhrase] = useState(landingPhrases[0]);

    useEffect(() => {
        const pick =
            landingPhrases[Math.floor(Math.random() * landingPhrases.length)];
        setLandingPhrase(pick);
    }, []);

    const progress = ((step + 1) / 7) * 100;

    return (
        <>
            <Toaster />
            <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-rose-200 via-amber-100 to-sky-200">
                {/* soft blobs */}
                <div className="pointer-events-none fixed inset-0 -z-20">
                    <div className="absolute -top-24 -left-16 h-64 w-64 rounded-[45%] bg-orange-300/50 blur-3xl animate-floaty-slow" />
                    <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-[45%] bg-sky-300/60 blur-3xl animate-floaty-slow-reverse" />
                    <div className="absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-rose-300/40 blur-3xl" />
                </div>

                {/* tiny floating icons */}
                <div className="pointer-events-none fixed inset-0 -z-10">
                    <span className="absolute left-8 top-10 text-4xl animate-bounce-slow">
                        🤡
                    </span>
                    <span className="absolute right-10 bottom-10 text-4xl rotate-[10deg]">
                        🔍
                    </span>
                </div>

                {/* HEADER BAR – full width */}
                <header className="relative z-10 flex flex-col gap-3 border-b border-rose-200/70 bg-white/70 px-6 py-3 backdrop-blur">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-700 border border-rose-200/80">
                                <span className="emoji-wiggle inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-400 text-[10px] text-white">
                                    404
                                </span>
                                <span>B.I.R – Bureau of Inconvenient Research</span>
                            </div>
                            <p className="mt-1 text-[11px] text-slate-600">{landingPhrase}</p>
                        </div>

                        {/* progress pill */}
                        <div className="rounded-2xl bg-slate-900 text-slate-50 px-4 py-2 text-[11px] shadow-md flex flex-col items-end gap-1">
                            <span className="flex items-center gap-1">
                                Step{" "}
                                <span className="font-semibold text-amber-300">{step + 1}</span>
                                <span>/ 7</span>
                            </span>
                            <span className="flex items-center gap-1">
                                Chaos level:
                                <span>🔥</span>
                                <span className="font-mono">{Math.min(10, step + 2)}/10</span>
                            </span>
                        </div>
                    </div>

                    {/* progress bar across the whole page */}
                    <div className="w-full max-w-5xl mt-1">
                        <div className="h-2 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bir-progress-wiggle"
                                style={{ width: `${Math.max(12, progress)}%` }}
                            />
                        </div>
                        <p className="mt-1 text-[10px] text-slate-500">
                            Currently overcomplicating your life by{" "}
                            <span className="font-semibold text-rose-500">
                                {Math.round(progress)}%
                            </span>
                            .
                        </p>
                    </div>
                </header>

                {/* MAIN AREA – full width, not a box */}
                <main className="relative z-10 flex-1 px-4 sm:px-6 py-5">
                    <div className="relative mx-auto h-full w-full max-w-6xl rounded-3xl bg-slate-50/90 border border-slate-200 shadow-[0_18px_55px_rgba(148,163,184,0.55)] overflow-hidden">
                        {/* scribbly bg */}
                        <div className="pointer-events-none absolute inset-0 opacity-30 bir-scribble-bg" />

                        {/* actual content */}
                        <div className="relative z-10 h-full w-full px-4 sm:px-6 py-5">
                            {step === 0 && <LandingStep onNext={nextStep} />}

                            {step === 1 && (
                                <SearchTypeStep
                                    value={form.searchType}
                                    onChange={(value) => updateForm({ searchType: value })}
                                    onNext={nextStep}
                                    onBack={prevStep}
                                    setMessage={setMessages}
                                />
                            )}

                            {step === 2 && (
                                <MoodStep
                                    form={form}
                                    onChange={updateForm}
                                    onNext={nextStep}
                                    onBack={prevStep}
                                    setMessage={setMessages}
                                />
                            )}

                            {step === 3 && (
                                <QueryFormStep
                                    form={form}
                                    onChange={updateForm}
                                    onNext={nextStep}
                                    onBack={prevStep}
                                    setMessage={setMessages}
                                />
                            )}

                            {step === 4 && (
                                <VerificationStep
                                    onNext={nextStep}
                                    onBack={prevStep}
                                    setMessage={setMessages}
                                />
                            )}

                            {step === 5 && (
                                <SummaryStep
                                    form={form}
                                    onBack={prevStep}
                                    onEditAll={() => setStep(1)}
                                    onConfirm={nextStep}
                                />
                            )}

                            {step === 6 && (
                                <ResultsStep
                                    form={form}
                                    onBack={() => setStep(5)}
                                    onNext={() => setStep(7)} // new step for celebration
                                />
                            )}

                            {step === 7 && (
                                <CelebrationPage onRestart={() => setStep(0)} />
                            )}

                            {messages && (
                                <p className="mt-4 text-sm font-semibold text-rose-500">
                                    {messages}
                                </p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
