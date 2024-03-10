import React from "react";
import { Schedule } from "../../components/Schedule/Schedule.jsx";
import { About } from "../../components/About/About.jsx";
import { Advertising } from "../../components/Advertising/Advertising.jsx";
import { Timer } from "../../components/Timer/Timer.jsx";


export const Home = () => {
  return (
    <>
      <Timer />
      <About />
      <Schedule />
      <Advertising />
    </>
  );
};
