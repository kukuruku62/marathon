import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const CheckoutForm = () => {
  const participant = useSelector((state) => state.events.registeredParticipant);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_STRIPE_CHECKOUT_SESSION, {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(participant),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div id="checkout" style={{ padding: "50px 0" }}>
      {clientSecret && (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
};
