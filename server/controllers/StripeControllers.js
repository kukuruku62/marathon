import dotenv from "dotenv";
const env = dotenv.config({ path: "./.env" });

import Stripe from "stripe";
const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);
const endpointSecret = process.env.REACT_APP_STRIPE_ENDPOINT_SECRET;

import { addPartisipantToDataBase } from "../helpers/addPartisipantToDataBase.js";
import { sortPriceByDate } from "../helpers/sortPriceByDate.js";


export const createCheckout = async (req, res) => {
  const nameEvent = req.body.name;
  const nameParticipant = req.body.firstName;
  const surnameParticipant = req.body.lastName;

  const customer = await stripe.customers.create({
    metadata: {
      eventId: req.body._id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      distance: req.body.distance,
      age: req.body.age,
      email: req.body.email,
      gender: req.body.gender,
    },
  });

  try {
    const resultSortPriceByDate = await sortPriceByDate(req.body._id);
    const session = await stripe.checkout.sessions.create({
      
      payment_method_types: ["card"],
      customer: customer.id,
      mode: "payment",
      ui_mode: "embedded",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Štartovné ${nameParticipant} ${surnameParticipant} na preteky: "${nameEvent}"`,
            },
            unit_amount: resultSortPriceByDate * 100,
          },
          quantity: 1,
        },
      ],
      return_url: "http://localhost:5173/payment/return?session_id={CHECKOUT_SESSION_ID}",
      automatic_tax: { enabled: false },
    });
    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const sessionStatus = async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  
  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
};

export const handleStripeWebhookEvent = (req, response) => {
  const sig = req.headers["stripe-signature"];
  let event;
  // console.log('ret')
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    // console.log('sec')
  } catch (err) {
    // console.log('ytr')
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  let data = event.data.object;

  if (event.type === "checkout.session.completed") {
    // console.log('dsfsadwe3')
    stripe.customers
      .retrieve(data.customer)
      .then(async (customer) => {
        try {
          // console.log('dsf')
          addPartisipantToDataBase(customer.metadata);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => console.log(err.message));
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
};
