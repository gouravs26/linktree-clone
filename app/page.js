"use client"
import linkAnimation from "../animations/link.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const prefix = "linkdrp.ee/";
  const [text, setText] = useState(prefix)
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // If user tries to delete the prefix, reset it
    if (!inputValue.startsWith(prefix)) {
      setText(prefix);
    } else {
      setText(inputValue);
    }
  };
  const createTree = () => {
    let link= text.split("/")[1];
    router.push(`/generate?handle=${link}`);
  }
  return (
    <main>
      {/* <Navbar/> */}
      {/* Add margin-top for mobile to avoid overlap with Navbar */}
      <section className='bg-[#264f1a] min-h-[100vh] grid grid-cols-1 md:grid-cols-2 pt-[120px] md:pt-0'>
        <div className="flex flex-col justify-center mt-4 md:mt-28 px-4 md:ml-18">
          {/* Add top margin to section 1 content */}
          <div className="mt-8 md:mt-16" />
          <p className="font-bold text-4xl md:text-8xl text-[#d2e823] leading-tight">Everything you</p>
          <p className="font-bold text-4xl md:text-8xl text-[#d2e823] leading-tight">are. In one,</p>
          <p className="font-bold text-4xl md:text-8xl text-[#d2e823] leading-tight">simple link in </p>
          <p className="font-bold text-4xl md:text-8xl text-[#d2e823] leading-tight">bio.</p>
          <p className="text-white text-base md:text-xl my-6 md:my-6">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input gap-2 flex flex-col md:flex-row my-4">
            <input value={text} onChange={handleChange} className="bg-white px-5 py-3 md:px-9 md:py-5 rounded-lg focus:outline-[#264f1a] text-base md:text-lg w-full md:w-auto" type="text" />
            <button onClick={createTree} className="rounded-full bg-[#e9c0e9] px-4 py-3 md:py-5 font-bold text-base md:text-lg w-full md:w-auto mt-2 md:mt-0">Claim your MyLinkDrop</button>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center mt-12 md:mt-28 gap-6 md:ml-18 md:mr-18 px-4">
          <Lottie
            animationData={linkAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", maxWidth: 400 }}
          />
        </div>
      </section>
      <section className='bg-[#9a3104] min-h-[100vh] flex items-center justify-center relative overflow-hidden px-2'>
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0 animate-gradient" style={{
          background: "linear-gradient(120deg, #ffb347, #ffcc70, #ff6f91, #ffc3a0)",
          backgroundSize: "400% 400%",
          opacity: 0.5,
          filter: "blur(12px)"
        }} />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl py-10 md:py-20 px-2 md:px-6">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 tracking-tight animate-fadein">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Why MyLinkDrop?
            </span>
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl text-white text-center mb-6 md:mb-10 font-semibold animate-slideup">
            <span className="bg-gradient-to-r from-pink-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent">
              One link. Endless possibilities.
            </span>
          </p>
          <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center items-center mb-8 md:mb-10">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center w-full md:w-72 animate-card">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" d="M12 3v18m9-9H3"/></svg>
              <span className="mt-4 text-lg md:text-xl font-bold text-white text-center">Grow Your Audience</span>
              <span className="mt-2 text-white/80 text-center text-base md:text-lg">Share all your content, socials, and products in one place.</span>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center w-full md:w-72 animate-card delay-200">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path stroke="#fff" strokeWidth="2" d="M8 12l2 2 4-4"/></svg>
              <span className="mt-4 text-lg md:text-xl font-bold text-white text-center">Track Engagement</span>
              <span className="mt-2 text-white/80 text-center text-base md:text-lg">Get insights on clicks and visits to your link.</span>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center w-full md:w-72 animate-card delay-400">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2"/><path stroke="#fff" strokeWidth="2" d="M8 12h8"/></svg>
              <span className="mt-4 text-lg md:text-xl font-bold text-white text-center">Easy Customization</span>
              <span className="mt-2 text-white/80 text-center text-base md:text-lg">Personalize your page with themes and styles.</span>
            </div>
          </div>
          <div className="mt-6 md:mt-8">
            <span className="text-xl md:text-3xl font-extrabold text-white animate-pulse text-center block">Start sharing smarter, not harder!</span>
          </div>
        </div>
        <style jsx>{`
          .animate-gradient {
            animation: gradientMove 10s ease-in-out infinite;
          }
          @keyframes gradientMove {
            0% {background-position:0% 50%}
            50% {background-position:100% 50%}
            100% {background-position:0% 50%}
          }
          .animate-fadein {
            animation: fadein 1.2s cubic-bezier(.57,.21,.69,1.25);
          }
          .animate-slideup {
            animation: slideup 1.2s cubic-bezier(.57,.21,.69,1.25);
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideup {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-card {
            animation: cardfade 1.2s cubic-bezier(.57,.21,.69,1.25);
          }
          .animate-card.delay-200 { animation-delay: 0.2s; }
          .animate-card.delay-400 { animation-delay: 0.4s; }
          @keyframes cardfade {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
        `}</style>
      </section>
    </main>
  );
}

