export default function Result({ result }) {
    const percent = result?.percent ?? 0;
    const username = result?.username ?? "";

    const radius = 50;
    const stroke = 10;
    const center = 60;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="flex flex-col items-center gap-5 pt-45 text-center">
            <div className="relative w-32 h-32">
                <svg width="100%" height="100%" viewBox="0 0 120 120" className="-rotate-90">
                    <circle cx={center} cy={center} r={center} stroke="#1e293b" strokeWidth={stroke} fill="none" />

                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="url(#grad)"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (circumference * percent) / 100} />

                    <defs>
                        <linearGradient id="grad">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                    {percent}%
                </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-500">
                {username}
            </h2>

            <p className="text-gray-400">
                Moslik darajasi {percent < 50 ? "past" : "yaxshi"}.
            </p>

            <div className="flex justify-center items-center gap-12"> 
                <a href={`https://instagram.com/${username}`} target="_blank" rel="noopener noreferrer"
                    className="btn bg-gradient-to-r from-purple-500 to-pink-500 
               hover:scale-105 transition-all from-purple-700 to-pink-700 cursor-pointer">
                    Profilga o‘tish
                </a>

                <a href="/" className="btn bg-gradient-to-r transition-all hover:scale-105
                 py-3 px-5 from-blue-900 to-blue-800  rounded-xl cursor-pointer ">Chiqish</a>
            </div>

        </div>
    );
}