import slider1 from "../Images/new_slider_1.jpeg";
import slider2 from "../Images/new_slider_2.jpeg";
import slider3 from "../Images/new_slider_3.jpeg";
import slider4 from "../Images/new_slider_4.jpeg";
import slider5 from "../Images/new_slider_5.jpeg";

import "../Css/Slider.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Slider() {
  const [slider, setSlider] = useState(slider1);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevSlider) => {
        if (prevSlider === slider1) return slider2;
        if (prevSlider === slider2) return slider3;
        if (prevSlider === slider3) return slider4;
        if (prevSlider === slider4) return slider5;
        if (prevSlider === slider5) return slider1;
      });
    }, 3000);

    // Cleaning interval when the component unmounts or updates
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="slider-container container">
      <img className="slider-image img-fluid" src={slider} alt="slider"></img>
      <h1 style={{ border: "2px solid white" }}>{t("sliderComponentTitle")}</h1>
    </div>
  );
}
