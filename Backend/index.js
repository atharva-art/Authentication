const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Atharvanew:Atharvanew@cluster0.txruh.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(4000, () => {
  console.log(`Server is listening on port 4000`);
});

app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());