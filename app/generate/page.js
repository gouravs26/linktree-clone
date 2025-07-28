'use client'
import React, { use, useState, Suspense } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import loadingAnimation from "@/animations/loading.json";

const GenerateContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [links, setlinks] = useState([{ link: "", linktext: "" }])
    const [handle, setHandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setDesc] = useState("")
    const [loading, setLoading] = useState(false)
    const submitLinks = async () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });
        console.log('Raw - ', raw);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        // Use relative path for API endpoint to work in any environment
        const r = await fetch("/api/add", requestOptions)
        const result = await r.json();
        console.log(result);
        if (result.success) {
            setlinks([{ link: "", linktext: "" }])
            setHandle("")
            setpic("")
            setDesc("")
            toast.success(result.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(true)
            setTimeout(() => {
                router.push(`/${handle}`);
            }, 5000)
        }
        else {
            toast.error(result.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    const handleChange = (index, link, linktext) => {
        setlinks((initiallinks) => {
            return initiallinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item;
                }
            })
        })
    }
    const addLink = () => {
        setlinks(links.concat([{ link: "", linktext: "" }]))
    }
    return (
        <div className=' bg-[#235ac0] min-h-screen'>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="flex flex-col items-center gap-6 animate-fadein">
                        <div style={{ width: 600, height: 600 }}>
                            <Lottie
                                animationData={loadingAnimation}
                                loop={true}
                                autoplay={true}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>
                    <style jsx>{`
                        .animate-fadein {
                            animation: fadein 0.7s;
                        }
                        @keyframes fadein {
                            from { opacity: 0; transform: scale(0.95);}
                            to { opacity: 1; transform: scale(1);}
                        }
                        .loading-glow {
                            text-shadow: 0 0 16px #3b82f6, 0 0 4px #fff;
                            font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
                        }
                    `}</style>
                </div>
            )}
            <div className='grid grid-cols-2'>
                <div className="col1 flex flex-col items-center justify-center text-white">
                    <h1 className='font-bold text-4xl'>Create your MyLinkDrop</h1>
                    <div className='flex flex-col gap-5 my-8'>
                        <h2 className='font-semibold text-2xl'>Step 1 : Claim your handle</h2>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e => setHandle(e.target.value)} className='px-4 py-2 focus:outline-[#264f1a] bg-white rounded-full text-black' type="text" placeholder='Choose a handle' />
                        </div>
                        <h2 className='font-semibold text-2xl'>Step 2 : Add links</h2>
                        <div className='flex flex-col gap-4'>
                            {links && links.map((item, index) => {
                                return (
                                    <div key={index} className="mx-4 flex gap-2">
                                        <input value={item.linktext || ""} onChange={e => handleChange(index, item.link, e.target.value)} className='px-4 py-2 focus:outline-[#264f1a] bg-white rounded-full text-black' type="text" placeholder='Enter link text' />
                                        <input value={item.link || ""} onChange={e => handleChange(index, e.target.value, item.linktext)} className='px-4 py-2 focus:outline-[#264f1a] bg-white rounded-full text-black' type="text" placeholder='Enter link' />
                                    </div>
                                )
                            })}

                            <button onClick={() => addLink()} className='bg-black py-2 text-white rounded-full px-4 font-semibold cursor-pointer w-54 mx-4'>✚ Add Link</button>
                        </div>
                        <h2 className='font-semibold text-2xl'>Step 3 : Add a picture and description</h2>
                        <div className="mx-4 flex flex-col gap-2">
                            <input value={pic || ""} onChange={e => setpic(e.target.value)} className='px-4 py-2 focus:outline-[#264f1a] bg-white rounded-full text-black' type="text" placeholder='Enter link to your picture' />
                            <input value={desc || ""} onChange={e => setDesc(e.target.value)} className='px-4 py-2 focus:outline-[#264f1a] bg-white rounded-full text-black' type="text" placeholder='Enter description' />
                            <button disabled={handle == "" || pic == "" || links[0].link == "" || links[0].linktext == ""} onClick={() => { submitLinks() }} className='bg-black disabled:bg-slate-700 text-white rounded-full px-4 py-2 font-semibold cursor-pointer w-fit my-5'>Create your MyDropLink</button>
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <img className='h-screen w-full object-cover' src="banner.png" alt="" />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default function Generate() {
    return (
        <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
            <GenerateContent />
        </Suspense>
    );
}
