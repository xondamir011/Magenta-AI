export default function Comments() {
  const comments = [
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
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-bold">
        Foydalanuvchilar sharhlari (50+)
      </h3>

      {comments.map((c, i) => (
        <div key={i}
          className="bg-white/5 p-4 rounded-xl flex justify-between">
          <div>
            <p className="text-purple-400">{c.name}</p>
            <p className="text-gray-300">{c.text}</p>
          </div>
          <span className="text-gray-400">{c.percent}%</span>
        </div>
      ))}
    </div>
  );
}