import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchAnime = () => {
  return (
    <div className="search-anime">
      <h2 className="search-anime__heading heading">Search for an Anime</h2>
      <div className="search-anime__bar">
        <input type="text" className="search-anime__input" placeholder="Search Anime....." />
        <div className="search-anime__icon">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchAnime;
