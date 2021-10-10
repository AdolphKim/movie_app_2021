import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id,year,title,summary,poster,genres}){
    return <div className="movie">
        <img src={poster} alt={title} title ={title} />
        <div className="movie__data">
        <h1 className="movie__title">{title}</h1>

        <h5 className="movie__year">{year}</h5>
        <ul className="genres">{genres.map((genre ,index) => {
             return <li className="genre" key ={index}>{genre}</li>
             })}
             </ul>
        <p className="movie__summary">{summary.slice(0,140)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;