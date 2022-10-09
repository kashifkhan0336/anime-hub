import React from "react";
import Genre from "../components/Genre";
import SearchAnime from "../components/SearchAnime";
import Slider from "../components/Slider";
import Slide1 from "../assets/images/slide-1.jpg";
import Slide2 from "../assets/images/slide-2.jpg";
import Slide3 from "../assets/images/slide-3.jpg";

const heroSliderImgs = [
  {
    url: Slide1,
  },
  {
    url: Slide2,
  },
  {
    url: Slide3,
  }
]

const Home = () => {
  return (
    <div className="hero container">
      <Slider data={heroSliderImgs} perPage={1} />
      <SearchAnime />
      <Genre />
    </div>
  );
};

export default Home;
