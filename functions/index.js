const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IfQT6SGEL80jeyCk8xfx1mOByXuA59ZlMPWzTrOvX8ltO6juFeKYRCNi1vRjw9QVVupWmu8PuNYmyCavuL70AsV00M362J4cq"
);

//API

//API congig
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
 app.post("/payments/create", async (request, response) => {
   const total = request.query.total;
   console.log("Payment Request Recieved for this amount >>", total);

   const paymentIntent = await stripe.paymentIntents.create({
     amount: total, //subunits of currency
     currency: "INR",
   });

//   //OK -created
   response.status(201).send({
     clientSecret: paymentIntent.client_secret,
   });
 });
//Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/challenge-51b81/us-central1/api
