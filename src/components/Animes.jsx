import React from "react";
import AnimeCard from "./AnimeCard";

const Animes = ({ animeData }) => {
    const displayAnimeCards = animeData.map(data => {
        return <AnimeCard key={data._id} title={data.title} image={data.image} status={data.status} episodes={data.episodes} />
    })
  return (
    <div className="animes">
      <h2 className="animes__heading heading">Showing Results</h2>
      <div className="animes__cards grid">
        {displayAnimeCards}
      </div>
    </div>
  );
};

export default Animes;
