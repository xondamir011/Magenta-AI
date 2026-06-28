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
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">

      <div className="w-130 max-w-2xl bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-7">

        <h2 className="text-3xl text-center mb-8 font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          O'zingiz haqida
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input placeholder="Yoshi"
            type="number"
            className="bg-[#0f172a] border border-white/10 rounded-xl p-3 outline-none focus:border-primary"
            onChange={(e) =>
              setForm({ ...form, age: e.target.value })
            }/>

          <input placeholder="Bo'yi (sm)"
            type="number"
            className="bg-[#0f172a] border border-white/10 rounded-xl p-3 outline-none focus:border-accent"
            onChange={(e) =>
              setForm({ ...form, height: e.target.value })
            }/>

          <input placeholder="Oylik"
            type="number"
            className="bg-[#0f172a] border border-white/10 rounded-xl p-3 outline-none focus:border-secondary"
            onChange={(e) =>
              setForm({ ...form, salary: e.target.value })
            }/>

          <input placeholder="Kasbi"
            className="bg-[#0f172a] border border-white/10 rounded-xl p-3 outline-none focus:border-info"
            onChange={(e) =>
              setForm({ ...form, job: e.target.value })
            }/>
        </div>

        <div className="flex justify-center mt-8">
          <button onClick={handleClick}
            className="px-8 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 font-semibold">
            Davom etish
          </button>
        </div>

      </div>
    </div>
  );
}