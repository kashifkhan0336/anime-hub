import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Slide1 from "../assets/images/slide-1.jpg";
import Slide2 from "../assets/images/slide-2.jpg";
import Slide3 from "../assets/images/slide-3.jpg";

const Slider = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        heightRatio: 0.5,
        cover: true
      }}
    >
      <SplideSlide>
        <img src={Slide1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={Slide2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={Slide3} alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
