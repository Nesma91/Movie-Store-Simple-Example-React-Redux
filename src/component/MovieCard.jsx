import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFavourite } from "./../Store/Actions/Favourite";
import { setReducer } from "./../Store/Actions/Reduce";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const addFavMovie = () => {
    dispatch(setFavourite(movie));
  };
  const removeFavourite = (movie) => {
    dispatch(setReducer(movie));
  };
  return (
    <>
      <div className="card h-100">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top"
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            {movie.release_date} : {movie.original_title} : {movie.vote_count}
          </p>
          <Link to={`/Movies/${movie.id}`} className="btn btn-dark ms-2">
            Details
          </Link>
          <button className="btn btn-success ms-2" onClick={addFavMovie}>
            Favourites{" "}
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() => {
              removeFavourite(movie);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
