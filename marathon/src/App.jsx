import React from "react";
// import {} from "react-error-boundary" // УДАЛИТЬ ЭРОР БОУНДАРИ, ЕСЛИ НЕ НУЖЕН
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.jsx";
import { SingleEvent } from "./pages/SingleEvent/SingleEvent.jsx";
import { Registration } from "./pages/Registration/Registration.jsx";
import { Participants } from "./pages/Participants/Participants.jsx";
import { CheckoutForm } from "./components/Stripe/CheckoutForm.jsx";
import { Return } from "./components/Stripe/Return.jsx";
import { Donate } from "./pages/Donate/Donate.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="events/:id" element={<SingleEvent />} />
      <Route path="events/:id/registration" element={<Registration />} />
      <Route path="events/:id/participants" element={<Participants />} />
      <Route path="donate" element={<Donate />} />
      <Route path="contact" element={<Contact />} />

      <Route path="payment/checkout" element={<CheckoutForm />} />
      <Route path="payment/return" element={<Return />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
