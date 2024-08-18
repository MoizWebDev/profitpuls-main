const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:nida1984@cluster0.cs7tw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let reviewsModel;
try {
  reviewsModel = mongoose.model("reviews");
} catch (error) {
  console.log("Creating new 'reviews' model");
  reviewsModel = mongoose.model(
    "reviews",
    new mongoose.Schema({
      name: String,
      message: String,
    })
  );
}

module.exports = reviewsModel;
