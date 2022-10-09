import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { options, fetchData } from "../fetchData";

const Genre = () => {
  const [genres, setGenres] = useState([{_id:"Aall"}]);
  useEffect(() => {
    const fetchGenres = async () => {
      const genreData = await fetchData(
        "https://anime-db.p.rapidapi.com/genre",
        options
      );
      setGenres([{_id: "All"}, ...genreData]);
    };
    fetchGenres()
    console.log(genres)
  }, []);
  return (
    <div className="genre">
      <h2 className="genre__heading heading">Search for a Genre</h2>
      <div className="genres">
        <Slider data={genres} perPage={3} />
      </div>
    </div>
  );
};

export default Genre;
