import clientPromise from "../../mongodb";
import mongoose from "mongoose";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("main");
    switch (req.method) {
        case "POST":
            // let bodyObject = JSON.parse(req.body);
            let bodyObject = req.body;
            let myPost = await db.collection("log").insertOne(bodyObject);
            res.json(myPost);
            break;
        case "GET":
            const { _id } = req.query
            let allPosts
            if (_id) {
                allPosts = await db.collection("log").find({ _id: _id });
            } else {
                allPosts = await db.collection("log").find({}).toArray();
            }
            res.json(allPosts);
            break;
    }
}
