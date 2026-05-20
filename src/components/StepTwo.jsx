import { useState } from "react";

export default function StepTwo({ setUserForm, setStep }) {

    const [form, setForm] = useState({
        age: "",
        city: "",
        height: "",
        salary: "",
        job: "",
    });

    const handleClick = () => {
        setUserForm(form);
        setStep(3);
    };

    return (
        <div className="flex-col flex justify-center pt-30 items-center gap-3">

            <h2 className="text-3xl text-center mb-5 font-bold">
                O‘zingiz haqida
            </h2>

            <input
                placeholder="Yoshingiz"
                type="number"
                className="w-80 bg-[#0f172a] border border-white/10 rounded-xl p-3"
                onChange={(e) =>
                    setForm({
                        ...form,
                        age: e.target.value,
                    })
                } />

            <input
                placeholder="Shahringiz"
                className="w-80 bg-[#0f172a] border border-white/10 rounded-xl p-3"
                onChange={(e) =>
                    setForm({
                        ...form,
                        city: e.target.value,
                    })
                }/>

            <input
                placeholder="Bo‘yingiz"
                type="number"
                className="w-80 bg-[#0f172a] border border-white/10 rounded-xl p-3"
                onChange={(e) =>
                    setForm({
                        ...form,
                        height: e.target.value,
                    })
                }/>

            <input type="number"
                placeholder="Oylik"
                className="w-80 bg-[#0f172a] border border-white/10 rounded-xl p-3"
                onChange={(e) =>
                    setForm({
                        ...form,
                        salary: e.target.value,
                    })
                }/>

            <input
                placeholder="Kasbingiz"
                className="w-80 bg-[#0f172a] border border-white/10 rounded-xl p-3"
                onChange={(e) =>
                    setForm({
                        ...form,
                        job: e.target.value,
                    })
                }/>

            <button onClick={handleClick}
                className="mt-4 py-3 px-5 rounded-xl bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 hover:scale-105 transition-all">
                 Davom etish
            </button>

        </div>
    );
}