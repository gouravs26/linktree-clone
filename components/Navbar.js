"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname)
  return (<>
    {showNavbar && <nav className='bg-white w-[98vw] max-w-[700px] mx-auto fixed top-4 left-1/2 -translate-x-1/2 rounded-full h-[70px] p-2 flex flex-col md:flex-row md:justify-between items-center shadow-lg z-50'>
      <div className="logo flex items-center pl-4">
        <Link href={"/"}>
          <svg width="300" height="60" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg" fill="none">
            <text
              x="0"
              y="40"
              fontFamily="sans-serif"
              fontSize="24"
              fontWeight="bold"
              fill="#000"
            >
              MyLinkDrop
            </text>
            <g transform="translate(145, 20) scale(1.5)">
              <path
                d="M4 12a5 5 0 0 1 0-7.1l3-3a5 5 0 0 1 7.1 0"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4a5 5 0 0 1 0 7.1l-3 3a5 5 0 0 1-7.1 0"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0'>
        <button className="login bg-slate-200 px-6 py-2 rounded-lg w-full md:w-24 font-bold text-sm md:text-base">Log in</button>
        <button className="signup bg-black text-white px-6 py-2 rounded-full w-full md:w-40 font-bold text-sm md:text-base">Sign up free</button>
      </div>
    </nav>}
  </>
  )
}



export default Navbar
