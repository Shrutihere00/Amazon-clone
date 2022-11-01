const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Lu6dZSIETvuDNVWBfEgqaPlpgnjHPUAEA1p9KE0KA79UYFVHusQQrXAqXb3TgHjR3OmWoaMAbN7A1JCr9aAlpkf00WL9SMSw1"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//APIRoutes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Recieved BOOM !!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});
//Listen Command
exports.api = functions.https.onRequest(app);
//Example Endpoint
//http://127.0.0.1:5001/clone-f8c9e/us-central1/api
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
