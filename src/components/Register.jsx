import React from "react";

const Register = ({ setStep, setGender }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] to-[#0f172a] px-4">
            <div className="w-full max-w-md bg-[#0f172a]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col gap-6">

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">
                     Magenta Master AI
                    </h2>

                    <p className="text-gray-400 text-sm mt-3">
                      Kim bilan uchrashishingiz foizini yuqoriligin bilish
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <button onClick={() => { setGender("boy"); setStep(2); }}
                        className="py-3 rounded-xl cursor-pointer bg-gradient-to-r from-blue-900 to-sky-950 hover:scale-105 to-fuchsia-800 from-blue-800 transition-all font-semibold duration-300 border border-white/10">
                        O'g'il bola 
                    </button>
                    
                    <button onClick={() => { setGender("girl"); setStep(2); }}
                        className="py-3 rounded-xl cursor-pointer bg-gradient-to-r from-fuchsia-800 to-fuchsia-950 hover:scale-105 transition-all duration-300 font-semibold">
                        Qiz bola
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Register;