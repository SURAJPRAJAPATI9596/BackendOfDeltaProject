const express = require("express");
const app = express();
const Listing = require("./models/listing");
const mongoose = require("mongoose");
const cors = require("cors");
const ExpressError = require("./expressError");
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

app.listen(port, () => {
  console.log("server Started");
});

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

app.post("/api/listings/new", async (req, res) => {
  const data = req.body;
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

app.use((err, req, res, next) => {
  res.send("Something went wrong");
});
