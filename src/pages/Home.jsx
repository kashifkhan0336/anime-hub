import React from "react";
import SearchAnime from "../components/SearchAnime";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="hero container">
      <Slider />
      <SearchAnime />
    </div>
  );
};

export default Home;
