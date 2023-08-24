import React from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                   <option>Genre</option>
                   <option value="adventure">Adventure</option>
                   <option value="comedy">Comedy</option>
                   <option value="crime">Crime</option>
                   <option value="fantasy">Fantasy</option>
                   <option value="historycal">Historycal</option>
                   <option value="horror">Horror</option>
                   <option value="romance">Romance</option>
                   <option value="sci-fi">Sci-fi</option>
                   <option value="thirller">Thirller</option>
                   <option value="animation">Animation</option>
                   <option value="drama">Drama</option>
                   <option value="documentry">Documentry</option>
                </select>
            </div>
        )}
         <img
            src="https://pbs.twimg.com/media/FvUVt3hXgAAxP1H.jpg"
            alt="movie_image"
          />
   <div className="info">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQnDVCVgI5pT_Q0l9dqPqTcT1IHZrF6K3PC71xEQX1MOV5R3fuhXPXeSbrv9c7xnhsw&usqp=CAU" alt="title_image" />
      <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum in magnam fugiat, fuga voluptates ducimus harum optio delectus impedit.</span>
       <div className="buttons">
        <button className="play">
      <PlayArrowIcon />
      <span>Play</span>
        </button>
        <button className="more">
        <InfoOutlinedIcon />
        <span>Info</span>
        </button>
       </div>
   </div>

     </div>
  )
}

export default Featured