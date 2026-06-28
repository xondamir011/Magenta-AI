import { useEffect, useState } from "react";
import Comments from "./Comment";

export default function Result({ result }) {
  const percent = result?.percent ?? 0;
  const username = result?.username ?? "";

  const [animatedPercent, setAnimatedPercent] = useState(0);
  const cleanUsername = encodeURIComponent(
    username.trim().replace("@", "")
  );

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start++;
      setAnimatedPercent(start);

      if (start >= percent) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [percent]);

  const radius = 50;
  const stroke = 10;
  const center = 60;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl rounded-3xl shadow-2xl p-5 sm:p-8 flex flex-col items-center text-center">

        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Tahlil Xulosasi
        </h1>

        {/* CIRCLE */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 120"
            className="-rotate-90">

            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="#1e293b"
              strokeWidth={stroke}
              fill="none"/>

            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="url(#grad)"
              strokeWidth={stroke}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference -
                (circumference * animatedPercent) / 100
              }
              style={{
                transition: "stroke-dashoffset .2s linear",
              }}/>

            <defs>
              <linearGradient id="grad">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold">
              {animatedPercent}%
            </span>

            <span className="text-xs sm:text-sm text-gray-400 tracking-widest">
              MATCH
            </span>
          </div>
        </div>

        {/* USERNAME */}
        <h2 className="text-xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse break-all">
          {username}
        </h2>

        {/* STATUS */}
        <p className="text-sm sm:text-lg text-gray-300 mb-6 px-2">
          Moslik darajasi:
          <span className="font-bold ml-2 text-fuchsia-400">
            {percent < 50
              ? "Past 😕"
              : percent < 75
                ? "O‘rta 🙂"
                : "Juda yaxshi ❤️"}
          </span>
        </p>

        {/* BAR */}
        <div className="w-full max-w-md h-3 sm:h-4 bg-white/10 rounded-full overflow-hidden mb-8">
          <div className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-1000"
            style={{ width: `${animatedPercent}%` }}/>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 mb-8">
          <a href={`https://www.instagram.com/${cleanUsername}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 font-semibold">
            Profiliga o'tish
          </a>

          <a href="/"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all">
            Qaytish
          </a>
        </div>

        {/* COMMENTS */}
        <div className="w-full bg-black/20 rounded-2xl border border-white/10 p-4 sm:p-5">
          <Comments />
        </div>

      </div>
    </div>
  );
}