import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setReducer } from "./../Store/Actions/Reduce";
//import { useEffect, useState } from "react";

const Favourites = () => {
  const fav = useSelector((state) => state.favourite.currentMovie);
  const dispatch = useDispatch();

  const removeFavourite = (mov) => {
    dispatch(setReducer(mov));
  };

  return (
    <>
      <h1 className="col-6 text-center bolder">I am Your Favourites...</h1>
      <div>
        <div className="row  g-1">
          {fav.map((mov, index) => {
            const baseURL = `https://image.tmdb.org/t/p/w500/${mov.poster_path}`;
            return (
              <div className="col-6 col-md-4 mb-4">
                <div className="card">
                  <img src={baseURL} className="card-img-top" alt={mov.title} />
                  <div className="card-body">
                    <h5 className="card-title">{mov.title}</h5>
                    <p className="card-text">
                      {mov.release_date} : {mov.original_title} :{" "}
                      {mov.vote_count}
                    </p>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => {
                        removeFavourite(mov);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favourites;
