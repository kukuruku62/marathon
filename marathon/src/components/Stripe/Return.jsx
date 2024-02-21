import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { SuccessPayment } from "./SuccessPayment";

import { SkeletonBike } from "../SkeletonBike/SkeletonBike";

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`https://marathon-delta.vercel.app/api/stripe/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  if (status === null) {
    return <SkeletonBike />;
  }

  //TODO: CHECK REDIRECT AFTER FAILED PAYMENT
  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return <SuccessPayment customerEmail={customerEmail} />;
  }

  return null;
};
