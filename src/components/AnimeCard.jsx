import React from "react";
import TestPoster from "../assets/images/test-poster.jpg";

const AnimeCard = (props) => {
  return (
    <div className="anime-card">
      <img className="anime-card__img" src={props.image} alt="" />
      <div className="anime-card__info">
        <h2 className="anime-card__heading">{props.title}</h2>
        <h4 className="anime-card__episode">
          Episodes: <span className="episode">{props.episodes}</span>
        </h4>
        <h4 className="anime-card__status">
          Status: <span className="status">{props.status}</span>
        </h4>
      </div>
    </div>
  );
};

export default AnimeCard;
