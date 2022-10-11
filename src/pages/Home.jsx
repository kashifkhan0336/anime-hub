import React, { useEffect, useState, useLayoutEffect } from "react";
import Genre from "../components/Genre";
import SearchAnime from "../components/SearchAnime";
import Slider from "../components/Slider";
import Slide1 from "../assets/images/slide-1.jpg";
import Slide2 from "../assets/images/slide-2.jpg";
import Slide3 from "../assets/images/slide-3.jpg";
import Animes from "../components/Animes";
import { options, fetchData, searchOptions } from "../fetchData";
import ReactPaginate from "react-paginate";

const heroSliderImgs = [
  {
    url: Slide1,
  },
  {
    url: Slide2,
  },
  {
    url: Slide3,
  },
];

const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    async function getAnime() {
      const fetchedAnimes = await fetchData(
        `https://anime-db.p.rapidapi.com/anime?page=1&size=50`,
        searchOptions
      );
      return fetchedAnimes;
    }

    getAnime().then(data=>{
      setAnimeData(data.data)
      
    })
    if(animeData){
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(animeData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(animeData.length / itemsPerPage));
    }

    }, [itemOffset, itemsPerPage, animeData]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % animeData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="hero container">
      <Slider data={heroSliderImgs} perPage={1} />
      <SearchAnime setAnimeData={setAnimeData} />
      <Genre />
      {currentItems ? <Animes animeData={currentItems} /> : "loading...."}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Home;
