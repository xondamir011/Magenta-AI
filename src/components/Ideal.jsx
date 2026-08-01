import { useState } from "react";

const Ideal = ({ onNext }) => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        const cleanText = text.trim();

        if (!cleanText) {
            setError("Juftlik haqida ma'lumot kiriting");
            return;
        }

        if (cleanText.length < 8) {
            setError("To'liq ma'lumot kiriting");
            return;
        }

        const words = cleanText.split(" ").filter(Boolean);

        if (words.length < 3) {
            setError("Kamida 3 ta tavsif yozing");
            return;
        }

        setError("");
        onNext(cleanText);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#040a25] to-[#0a1435] px-5 py-10">
            <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

                <h1 className="text-3xl text-center font-bold mb-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    Ideal juftlik
                </h1>

                <p className="text-center text-gray-400 mb-6">
                    Ideal juftingiz qanday bo'lishini batafsil yozing
                </p>

                <textarea value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setError("");
                    }}
                    placeholder="Masalan: aqlli, odobli, chiroyli, mas'uliyatli, mehribon, maqsadlari aniq..."
                    className="textarea textarea-bordered w-full text-lg h-40 bg-[#0b1120] border-white/10 text-white focus:outline-none"/>

                {error && (
                    <div className="mt-3 text-red-500 text-sm text-center font-medium">
                        ⚠ {error}
                    </div>
                )}

                <button onClick={handleSubmit}
                    className="btn mt-6 border-none text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:scale-105 transition-all mx-auto block">
                    ANALIZNI BOSHLASH
                </button>

            </div>
        </div>
    );
};

export default Ideal;