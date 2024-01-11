import { Schedule } from "./components/Schedule/Schedule.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Slider } from "./components/Slider/Slider.jsx";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Schedule />
      <Footer />
    </>
  );
}

export default App;
