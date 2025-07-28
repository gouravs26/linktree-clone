import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("MyLinkDrop");
    const collection = db.collection("links")
    console.log('Body - ',body)
    const existing = await collection.findOne({ handle: body.handle })
    if (existing) {
        return Response.json({ success: false, error: true, message: 'Handle already exists', result: null })
    }
    const result = await collection.insertOne(body)
    return Response.json({ success: true, error: false, message: 'MyLinkDrop created!', result: result })
}