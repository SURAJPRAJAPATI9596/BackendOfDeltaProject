const express = require("express");
const app = express();
const Listing = require("./models/listing");
const mongoose = require("mongoose");
const cors = require("cors");
const ExpressError = require("./expressError");
const listingSchema = require("./schema");
const review = require("./models/review");
const port = 8080;
app.use(cors());
const morgan = require("morgan");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  req.time = Date(Date.now().toString());
  console.log(req.method, req.path, req.hostname, req.time);
  return next();
});

// mongoose
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
// server
app.listen(port, () => {
  console.log("server Started");
});
//Main rout
app.get("/api/listings", (req, res, next) => {
  try {
    Listing.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    next(err);
  }
});

//search or find rout
app.get("/api/listings/:id", (req, res) => {
  const { id } = req.params;
  Listing.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//new route
app.post("/api/listings/new", async (req, res) => {
  const data = req.body;
  const response = listingSchema.validate(data);
  console.log(response);
  const newListing = new Listing(data);
  newListing;
  newListing
    .save()
    .then((result) => {
      console.log("Data saved successfull" + result);
    })
    .catch((err) => {
      console.log("sorry! we cauth error", err);
    });
});
//edit
app.put("/api/listings/:id", (req, res) => {
  const { id } = req.params;
  console.log("request accepted");
  Listing.updateOne(
    { _id: req.body._id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        location: req.body.location,
        country: req.body.country,
      },
    },
  )
    .then((result) => {
      console.log("Data saved successfull");
    })
    .catch((err) => {
      console.log("sorry! we cauth error", err);
    });
});

// delete route
app.delete("/api/listings/:id", (req, res) => {
  const { id } = req.params;

  Listing.deleteOne({ _id: id })
    .then((result) => {
      console.log("Data deleted");
    })
    .catch((err) => {
      console.log("sorry! we cauth error", err);
    });
});

// reviews adding

app.post("/api/listings/:id/reviews", async (req, res) => {
  const newReview = new review(req.body);
  const reviewedListing = await Listing.findOne({ _id: req.params });
  console.log(reviewedListing);
  newReview
    .save()
    .then((result) => {
      console.log(result);
    })
    .then((err) => {
      console.log(err);
    });
  reviewedListing.reviews.push((prev) => ({ ...prev, newReview }));
});

app.use((err, req, res, next) => {
  res.send("Something went wrong");
});
