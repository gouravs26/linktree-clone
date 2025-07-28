"use client"
import Link from "next/link"

export default function ProfileCard({ item }) {
    return (
        <div className="relative flex justify-center items-center w-full">
            {/* Animated gradient background */}
            <div className="absolute inset-0 z-0 animate-gradient rounded-[32px]" style={{
                filter: "blur(12px)",
                opacity: 0.7
            }} />
            {/* Card */}
            <div className="photo flex flex-col justify-center items-center gap-4 z-10 animate-fadein"
                style={{
                    background: "rgba(30,41,59,0.85)",
                    borderRadius: "32px",
                    boxShadow: "0 8px 32px 0 rgba(6,182,212,0.37)",
                    border: "2px solid #06b6d4",
                    padding: "2.5rem 2rem",
                    maxWidth: "420px",
                    backdropFilter: "blur(12px)"
                }}>
                <img
                    src={item.pic}
                    alt="Profile"
                    className="rounded-full w-32 h-32 shadow-xl transition-transform duration-300 hover:scale-110 border-4 border-purple-300"
                    style={{
                        boxShadow: "0 4px 24px rgba(164,80,139,0.3)"
                    }}
                />
                <span className="font-extrabold text-2xl text-white drop-shadow-lg tracking-wide animate-slidein">@{item.handle}</span>
                <span className="w-72 text-center text-lg text-purple-100 font-medium mb-2 animate-fadein2">
                    {item.desc || "This user has not set a description yet."}
                </span>
                <div className="links w-full flex flex-col items-center">
                    {item.links.map((item, index) => {
                        // Ensure link starts with http:// or https://
                        const url = item.link.startsWith("http://") || item.link.startsWith("https://")
                            ? item.link
                            : `https://${item.link}`;
                        return (
                            <Link
                                key={index}
                                href={url}
                                target="_blank"
                            >
                                <div
                                    className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 min-w-72 flex justify-center shadow-2xl p-4 rounded-xl my-2 font-semibold text-lg text-white transition-all duration-200 hover:scale-105 hover:shadow-pink-500/40 hover:bg-purple-500 active:animate-bounce"
                                    style={{
                                        boxShadow: "0 2px 16px rgba(164,80,139,0.2)",
                                        border: "1.5px solid rgba(255,255,255,0.25)",
                                        cursor: "pointer",
                                        letterSpacing: "0.03em"
                                    }}
                                >
                                    {item.linktext}
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <style jsx>{`
                    .animate-fadein {
                        animation: fadein 1.2s cubic-bezier(.57,.21,.69,1.25);
                    }
                    .animate-fadein2 {
                        animation: fadein 2s cubic-bezier(.57,.21,.69,1.25);
                    }
                    .animate-slidein {
                        animation: slidein 1.1s cubic-bezier(.57,.21,.69,1.25);
                    }
                    @keyframes fadein {
                        from { opacity: 0; transform: translateY(30px);}
                        to { opacity: 1; transform: translateY(0);}
                    }
                    @keyframes fadein2 {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes slidein {
                        from { opacity: 0; transform: translateY(-20px);}
                        to { opacity: 1; transform: translateY(0);}
                    }
                    .active\\:animate-bounce:active {
                        animation: bounce 0.4s;
                    }
                    @keyframes bounce {
                        0% { transform: scale(1);}
                        30% { transform: scale(1.12);}
                        50% { transform: scale(0.96);}
                        70% { transform: scale(1.05);}
                        100% { transform: scale(1);}
                    }
                    .animate-gradient {
                        background: linear-gradient(270deg, #06b6d4, #a78bfa, #f472b6, #06b6d4);
                        background-size: 600% 600%;
                        animation: gradientMove 8s ease infinite;
                    }
                    @keyframes gradientMove {
                        0% {background-position:0% 50%}
                        50% {background-position:100% 50%}
                        100% {background-position:0% 50%}
                    }
                `}</style>
            </div>
        </div>
    )
}
