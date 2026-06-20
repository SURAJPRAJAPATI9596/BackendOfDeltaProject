const mongoose = require("mongoose");
const review = require("./review");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1566073771259-6a8506099945"
        : v,
    default: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "review",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
