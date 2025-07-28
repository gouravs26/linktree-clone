import ProfileCard from "@/components/ProfileCard"
import clientPromise from "@/lib/mongodb"
import Link from "next/link";
export default async function Page({ params }) {
    const { handle } = await params
    const client = await clientPromise;
    const db = client.db("MyLinkDrop");
    const collection = db.collection("links")
    const itemRaw = await collection.findOne({ handle: handle })
    if (!itemRaw) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-700 via-pink-400 to-purple-700">
                <div className="text-center text-red-500 text-2xl font-semibold bg-white/30 px-8 py-6 rounded-xl shadow-lg backdrop-blur-md">
                    Profile not found
                </div>
            </div>
        )
    }
    // Convert MongoDB document to plain object
    const item = {
        links: itemRaw.links,
        handle: itemRaw.handle,
        pic: itemRaw.pic,
        desc: itemRaw.desc,
        _id: itemRaw._id?.toString() // optional, only if you need _id
    }
    return (<>
        <div className="bg-gradient-to-br from-purple-700 via-pink-400 to-purple-700">
            <div className="logo ml-8">
                <Link href={"/"}>
                    <svg width="300" height="60" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <text
                            x="0"
                            y="40"
                            fontFamily="sans-serif"
                            fontSize="24"
                            fontWeight="bold"
                            fill="#FFF"
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
                                stroke="#FFF"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="flex flex-col min-h-screen justify-start items-center py-10  overflow-hidden">
                <ProfileCard item={item} />
            </div>
        </div>
    </>
    )
}