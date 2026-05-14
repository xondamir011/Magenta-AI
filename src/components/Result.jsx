import { useEffect, useState } from "react";
import Comments from "./Comment";

export default function Result({ result }) {
  const percent = result?.percent ?? 0;
  const username = result?.username ?? "";

  const [animatedPercent, setAnimatedPercent] = useState(0);

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
    <div className="flex flex-col items-center gap-5 sm:gap-6 pt-16 sm:pt-24 pb-16 text-center px-4 animate-fadeIn">

      {/* CIRCLE */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
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
              circumference - (circumference * animatedPercent) / 100
            }
            style={{ transition: "stroke-dashoffset .2s linear" }}/>

          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl sm:text-3xl font-bold">
            {animatedPercent}%
          </span>
          <span className="text-xs sm:text-lg text-gray-400">
            MATCH
          </span>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse break-words">
        {username}
      </h2>

      <p className="text-gray-300 text-base sm:text-lg max-w-xs sm:max-w-md">
        Moslik darajasi:{" "}
        <span className="text-accent text-lg sm:text-xl font-semibold">
          {percent < 50 ? "past" : percent < 75 ? "o‘rta" : "juda yaxshi"}
        </span>
      </p>

      {/* BAR */}
      <div className="w-full max-w-xs sm:max-w-sm h-3 sm:h-4 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
          style={{ width: `${animatedPercent}%` }}/>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-md">
        <a href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-50 sm:w-auto text-center mb-2 sm:mb-0 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-all">
          Profilga o‘tish
        </a>

        <a href="/"
          className="w-50 sm:w-auto text-center py-3 px-6 rounded-xl bg-blue-900 hover:scale-105 transition-all">
          Qaytish
        </a>
      </div>

      <div className="w-full max-w-md sm:max-w-xl mt-8 sm:mt-10 animate-slideUp">
        <Comments />
      </div>
    </div>
  );
}