import { useState } from "react";

const Ideal = ({ onNext }) => {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (!text.trim()) return;

        onNext(text);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#040a25] to-[#0a1435] px-5 py-10">
            <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

                <h1 className="text-2xl sm:text-3xl leading-tight text-center font-bold text-white mb-6">
                    Ideal juftlik
                </h1>

                <textarea value={text} onChange={(e) => setText(e.target.value)}
                  placeholder="Masalan: aqlli, chiroyli, sochi uzun..."
                    className="textarea textarea-bordered w-full text-lg h-36 sm:h-40 bg-[#0b1120] border-white/10 text-white focus:outline-none"/>

                <button onClick={handleSubmit}
                  className="btn mt-6 border-none text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:scale-105 transition-all mx-auto block">
                    ANALIZNI BOSHLASH
                </button>

            </div>
        </div>
    );
};

export default Ideal;