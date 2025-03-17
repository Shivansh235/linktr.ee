import clientPromise from "@/lib/mongodb"

export async function POST(request) {
 
        const data = await request.json();
        console.log(data);

        const client = await clientPromise; // Fix variable name
        const db = client.db("BitTree");
        const collection = db.collection("links");

        // Check if handle already exists
        const doc = await collection.findOne({ handle: data.handle });
        if (doc) {
            return Response.json({ success: false, error: true, message: 'Handle already exists!' ,result:null });
        }

        const result = await collection.insertOne(data);

        return Response.json({ success: true, error: false, message: 'Your Bittree added successfully!', result:result });
    
    
};
