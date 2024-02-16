import { Router } from "express";
import { createCheckout, sessionStatus, handleStripeWebhookEvent } from "../controllers/StripeControllers.js";
import bodyParser from "body-parser";
import express from "express";

const router = Router();

router.post("/create-checkout-session", createCheckout);

router.get("/session-status", sessionStatus);

router.post('/webhook', express.raw({type: 'application/json'}), handleStripeWebhookEvent)

export { router as stripeRouters };
