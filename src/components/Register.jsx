import React from "react";
import { FaMars, FaVenus } from "react-icons/fa";

const Register = ({ setStep, setGender }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] px-4 py-6">

            {/* Logo */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold animate-pulse bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Magenta Master AI
            </h1>

            {/* Card */}
            <div className="w-full max-w-sm sm:max-w-md bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-5 sm:p-8">

                {/* Description */}
                <div className="text-center mb-6">
                    <h2 className="text-white text-base sm:text-lg font-bold leading-relaxed">
                        Tahlilni boshlash uchun kim haqida ma'lumot
                        kiritmoqchi ekanligingizni tanlang
                    </h2>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4 sm:gap-5">

                    <button onClick={() => {
                            setGender("male");
                            setStep(2);
                        }}
                        className="group rounded-2xl p-4 sm:p-5 cursor-pointer bg-gradient-to-r from-blue-700 to-sky-500 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-lg">
                            
                        <div className="flex items-center justify-center gap-3">
                            <FaMars className="text-2xl sm:text-3xl text-white" />
                            <span className="text-base sm:text-lg font-bold text-white">
                                O'g'il bola
                            </span>
                        </div>
                    </button>

                    <button onClick={() => {
                            setGender("female");
                            setStep(2);
                        }}
                        className="group rounded-2xl p-4 sm:p-5 cursor-pointer bg-gradient-to-r from-pink-600 to-fuchsia-700 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-lg">

                        <div className="flex items-center justify-center gap-3">
                            <FaVenus className="text-2xl sm:text-3xl text-white" />
                            <span className="text-base sm:text-lg font-bold text-white">
                                Qiz bola
                            </span>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Register;