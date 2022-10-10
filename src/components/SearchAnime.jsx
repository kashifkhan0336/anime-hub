import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { options, fetchData, searchOptions } from "../fetchData";

const SearchAnime = ({setAnimeData}) => {
  const [animeSearch, setAnimeSearch] = useState("");

  const fetchSearchedAnime = async () => {
    const searchedData = await fetchData(
      `https://anime-db.p.rapidapi.com/anime?page=1&size=20&search=${animeSearch}`,
      searchOptions
    );
    console.log(searchedData);
    setAnimeData(searchedData);
    
    setAnimeSearch("")
  };

  return (
    <div className="search-anime">
      <h2 className="search-anime__heading heading">Search for an Anime</h2>
      <div className="search-anime__bar">
        <input
          type="text"
          className="search-anime__input"
          placeholder="Search Anime....."
          value={animeSearch}
          onChange={(e) => setAnimeSearch(e.target.value)}
        />
        <div className="search-anime__icon" onClick={fetchSearchedAnime}>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchAnime;
