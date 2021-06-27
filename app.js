const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(express.json());

// IMPORT ROUTES
const postRoute = require("./routes/post");

// MIDDLEWARES
app.use("/", postRoute);
app.use("/user", postRoute);

// connect to DB
const uri = process.env.DB_CONNECTION;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connection established");
});

// HOW to we start listening to the server
app.listen(3000);
