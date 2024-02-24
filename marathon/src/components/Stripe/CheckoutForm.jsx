import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OdBLyChoV7wOHwcTxOxVlZnBTreYosfcuhsdgCF5O5qPN7IM1PX4qENPRV35xA2ide5ld7q29q404MZuBQzjjzU00SNON6zN9"
);

export const CheckoutForm = () => {
  const participant = useSelector((state) => state.events.registeredParticipant);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://marathon-delta.vercel.app/api/stripe/create-checkout-session", {
      // fetch("http://localhost:3002/api/stripe/create-checkout-session", {
      
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
