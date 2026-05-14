import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([
    {
      name: "@Mona4",
      text: "Zo‘r dizayn!",
      percent: 57,
    },
    {
      name: "@komi01",
      text: "Natija o'rtacha",
      percent: 69,
    },
    {
      name: "@Rich_Kid5",
      text: "Natija juda aniq chiqdi!",
      percent: 72,
    },
  ]);

  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    const newComment = {
      name: `@user${Math.floor(Math.random() * 9999)}`, 
      text,
      percent: Math.floor(Math.random() * 100),
    };

    setComments((prev) => [newComment, ...prev]);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">

      <h3 className="text-lg font-bold mb-2">
        Foydalanuvchilar sharhlari: ({comments.length})
      </h3>

      <div className="flex gap-2">
        <input value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Sharh yozing..."
          className="flex-1 p-3 rounded-xl bg-white/10 outline-none text-white"/>

        <button onClick={handleAdd}
          className="px-4 rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-700 hover:scale-105 transition">
          OK
        </button>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {comments.map((c, i) => (
          <div key={i}
            className="bg-white/5 p-4 rounded-xl flex justify-between items-start">
            <div>
              <p className="text-purple-400">{c.name}</p>
              <p className="text-gray-300">{c.text}</p>
            </div>

            <span className="text-gray-400">{c.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}