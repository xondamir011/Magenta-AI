import { useEffect, useState } from "react";

const Loading = ({ onDone }) => {
  const [dots, setDots] = useState("");

  // Animatsion nuqtalar
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Kerakli vaqtdan keyin keyingi sahifaga o'tish (masalan 3 soniya)
  useEffect(() => {
    if (!onDone) return;
    const timer = setTimeout(() => onDone(), 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#040a25] to-[#0a1435] px-5">
      <div className="flex flex-col items-center gap-8">

        <div style={{ position: "relative", width: 80, height: 80 }}>
          {/* Tashqi aylana */}
          <svg
            width="80" height="80"
            viewBox="0 0 80 80"
            style={{ position: "absolute", inset: 0, animation: "spin 1.2s linear infinite" }}>
            <circle
              cx="40" cy="40" r="34"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="160"
              strokeDashoffset="60"/>

            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Ichki nuqta */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 12, height: 12,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              boxShadow: "0 0 12px #7c3aed",
              animation: "pulse 1.2s ease-in-out infinite",
            }} />
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/80 text-base sm:text-lg font-medium leading-relaxed">
            Sun'iy intellekt ma'lumotlar
            <br />
            bazasini solishtirmoqda{dots}
          </p>
        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.5; transform: scale(0.7); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loading;