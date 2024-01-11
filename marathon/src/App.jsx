import { Schedule } from "./components/Schedule/Schedule.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Slider } from "./components/Slider/Slider.jsx";

import "./index.css";
import { Advertising } from "./components/Advertising/Advertising.jsx";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Schedule />
      <Advertising/>
      <Footer />
    </>
  );
}

export default App;
