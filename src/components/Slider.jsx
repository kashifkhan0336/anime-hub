import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import GenreCard from "./GenreCard";

const Slider = ({ data, perPage }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        heightRatio: perPage > 1 ? 0.3 : 0.5,
        cover: true,
        perPage: perPage,
        gap: perPage > 1 ? "20px" : "0px"
      }}
    >
      {data.map((item, index) => {
        return (
          <SplideSlide key={index}>
            {item.url ? <img src={item.url} alt="Image 1" /> : <GenreCard genreName={item._id} />}
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Slider;
