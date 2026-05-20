import { useState } from "react";

const initialComments = [
  { name: "@Alibek0", text: "Natija juda aniq chiqdi!", percent: 3  },
  { name: "@Sevinch1", text: "Men ham tahlil qildim, menda 40% chiqdi.", percent: 96 },
  { name: "@Dark_Soul2", text: "Zo'r dastur, hammaga tavsiya qilaman!", percent: 87 },
  { name: "@Mona4", text: "Zo'r dizayn!", percent: 57 },
  { name: "@komi01", text: "Natija o'rtacha chiqdi.", percent: 69 },
  { name: "@Rich_Kid5", text: "Sal xato ishlavoti !", percent: 8 },
  { name: "@Rich_Kid5", text: "Juda tez ishladi, ajoyib!", percent: 72 },
  { name: "@Rich_Kid5", text: "Noto'g'ri ishlavotdi !", percent: 15 },
];

export default function Comments() {
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    setComments((prev) => [
      {
        name: `@user${Math.floor(Math.random() * 9999)}`,
        text,
        percent: Math.floor(Math.random() * 100),
      },
      ...prev,
    ]);
    setText("");
  };

  return (
    <div className="w-full rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">

      <h3 className="text-xl font-bold text-white mb-5">
        Foydalanuvchilar sharhlari ({comments.length > 50 ? "50+" : comments.length})
      </h3>

      <div className="flex gap-2 mb-5">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Sharh yozing..."
          className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/10 outline-none text-white placeholder:text-white/30 text-sm"/>

        <button onClick={handleAdd}
          className="px-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold text-sm hover:scale-105 transition-all">
          OK
        </button>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto pr-1"
        style={{ maxHeight: 420 }}>
        {comments.map((c, i) => (
          <div key={i}
            className="rounded-2xl p-4 flex justify-between items-start gap-4"
            style={{ background: "rgba(255,255,255,0.06)" }}>
              
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-sm">{c.name}</span>
              {c.text ? (
                <span className="text-white/70 text-sm leading-snug">{c.text}</span>
              ) : null}
            </div>
            
            <span className="text-white/40 text-sm whitespace-nowrap mt-0.5">
              {c.percent}% Match
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}