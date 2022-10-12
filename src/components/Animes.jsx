import React from "react";
import AnimeCard from "./AnimeCard";

const Animes = ({ animeData }) => {
  // const displayAnimeCards = currentItems && currentItems.map(data => {
  //     return <AnimeCard key={data._id} title={data.title} image={data.image} status={data.status} episodes={data.episodes} />
  // })
  return (
    <div className="animes">
      <h2 className="animes__heading heading">Showing Results</h2>
      <div className="animes__cards grid">
        {animeData &&
          animeData.map((data) => {
            return (
              <AnimeCard
                key={data._id}
                title={data.title}
                image={data.image}
                status={data.status}
                episodes={data.episodes}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Animes;
