import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};