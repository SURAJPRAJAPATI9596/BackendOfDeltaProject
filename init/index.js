const mongoose = require("mongoose");
const sampleListings = require("./data");
const Listing = require("./../models/listing");

main()
  .then((res) => {
    console.log("Server is connected with db");
  })
  .catch((error) => {
    console.log("error caught from backend");
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
}

const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(sampleListings);
  console.log("Data was intialized successfully");
};

initDb();
