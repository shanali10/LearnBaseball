import slider0 from "../Images/slide0.jpeg";
import slider1 from "../Images/slide1.jpeg";
import slider2 from "../Images/slide2.jpeg";
import slider3 from "../Images/slide3.jpeg";
import slider4 from "../Images/slide4.jpeg";
import "../Css/Slider.css";
import { useEffect, useState } from "react";

export default function Slider() {
  const [slider, setSlider] = useState(slider1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevSlider) => {
        if (prevSlider === slider0) return slider1;
        if (prevSlider === slider1) return slider2;
        if (prevSlider === slider2) return slider3;
        if (prevSlider === slider3) return slider4;
        if (prevSlider === slider4) return slider0;
      });
    }, 3000);

    // Cleaning interval when the component unmounts or updates
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount
  return (
    <div className="slider-container container">
      <img className="slider-image img-fluid" src={slider} alt="slider"></img>
      <h1 style={{border: "2px solid white"
       }}>
        Learn Baseball from Beginning to Advance with AI for New Fans
      </h1>
    </div>
  );
}
