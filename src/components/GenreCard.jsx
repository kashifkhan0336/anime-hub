import React from 'react'
import umaruChan from "../assets/icons/umaruchan.png"

const GenreCard = ({genreName}) => {
  return (
    <div className="genre-card">
        <img className='genre-card__img' src={umaruChan} alt="" />
        <h2 className='genre-card__heading'>{genreName}</h2>
    </div>
  )
}

export default GenreCard