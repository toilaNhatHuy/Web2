const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require('express')

const mongoose = require('mongoose')

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port`)
});

const uri = "mongodb+srv://nhoangphuc960:DatabaseWeb02@web02.9ysir.mongodb.net/?retryWrites=true&w=majority&appName=Web02";

const product = require('./product.js')

app.get('/',async (req, res) => {
  await mongoose.connect(uri);

  let Tee = await product.find()
  console.log(Tee);
  res.send(Tee)
})





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://nhoangphuc960:DatabaseWeb02@web02.9ysir.mongodb.net/?retryWrites=true&w=majority&appName=Web02"

// // const uri = process.env.MONGODB_URL as String;
// // const uri = "mongodb+srv://nhoangphuc960:DatabaseWeb02@web02.9ysir.mongodb.net/?retryWrites=true&w=majority&appName=Web02"
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function main(){

//   const client = new MongoClient(uri)
//   try{
//     await client.connect()
//     await findOneListingByName(client,"Private Room in Bushwick");
//   } 
//   catch(e){
//     console.error(e);
//   } finally{
//     await client.close();
//   }
// }
// main().catch(console.error);

// async function findListingsWithMiniumBedroomsBathroomsAndMostRecentReviews(client,{
//   minimumNumberOfBedrooms = 0,
//   minimumNumberOfBathrooms = 0,
//   maximumNumberOfResults = Number.MAX_SAFE_INTEGER
// } = {}){

//   const cursor = client.db("sample_airbnb").collection("listingsAndReviews").find({
//     bedrooms: { $gte: minimumNumberOfBedrooms },
//     bathrooms: {$gte: minimumNumberOfBathrooms}
//   }).sort({last_review:-1})
//   .limit(maximumNumberOfResults)
// }

// async function findOneListingByName(client, nameOfListing){
//   const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name:nameOfListing});

//     if (result){
//       console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
//       console.log(result)
//     }else{
//       console.log(`No listings found with the name '${nameOfListing}'`)
//     }

// }

// async function createMultipleListings(client,newListings){
//   const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

//   console.log(`${result.insertedCount} new listings created with the following id (s):`);
//   console.log(result.insertedIds)
// }

// async function createListing(client, newListing){
//   const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
//   console.log(`New listing created with the following id: ${result.insertedId}`)
// }

// async function listDatabases(client){
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:")
//   databasesList.databases.forEach(db => {
//     console.log(`- ${db.name}`)
//   })
// }
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
