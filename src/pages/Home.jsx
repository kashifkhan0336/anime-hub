import React, { useEffect, useState } from "react";
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
  const [animeData, setAnimeData] = useState([])
  const [isLoaded, setisLoaded] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFetch = async (page_number) => {
    const animes = await fetchData(
      `https://anime-db.p.rapidapi.com/anime?page=${page_number}&size=10`,
      searchOptions
    )
    console.log(animes)
    setAnimeData([...animes.data]);
    setPageCount(animes.meta.totalPage);
    setisLoaded(true);
  };

  useEffect(()=>{
    handleFetch(1)
  }, [])


  const handlePageChange = (selectedObject) => {
    console.log("Page Handle Called!")
    console.log(selectedObject)
		//setCurrentPage(selectedObject.selected);
    if(selectedObject.selected == 0){
      handleFetch(1);
    }
		handleFetch(selectedObject.selected+1)
	};

  return (
    <div className="hero container">
      <Slider data={heroSliderImgs} perPage={1} />
      {/* <SearchAnime setAnimeData={setAnimeData} /> */}
      <Genre />
      {isLoaded ? <Animes animeData={animeData} /> : "loading..."}
      {isLoaded ? (
				<ReactPaginate
					pageCount={pageCount}
					pageRange={1}
					marginPagesDisplayed={1}
					onPageChange={handlePageChange}
					containerClassName={'paginate-container'}
					previousLinkClassName={'page'}
					breakClassName={'page'}
					nextLinkClassName={'page'}
					pageClassName={'page'}
					disabledClassNae={'disabled'}
					activeClassName={'active'}
				/>
			) : (
				<div>Nothing to display</div>
			)} 
    </div>
  );
};

export default Home;
