import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { axiosInstance } from "../networks/axiosConfig";
import { getMovieDetails } from "../networks/MoviesAPIs";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    console.log(movieDetails);
    getMovieDetails(`${params.id}`)
      .then((response) => setMovieDetails(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1
        className="col-6 mb-5 row justify-content-center bolder"
        style={{ marginLeft: "25%", marginTop: "4%" }}
      >
        Movie Details...
      </h1>
      <div className="row justify-content-center">
        <div className="card mb-3" style={{ maxWidth: "119vh" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                className="img-fluid rounded-start"
                alt={movieDetails.original_title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movieDetails.title}</h5>
                <p className="card-text">{movieDetails.overview}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {movieDetails.original_title}
                  </small>
                </p>
                <div className="card-text">
                  <small className="text-muted">
                    <hr />
                    Rate: {movieDetails.vote_average}
                    <br />
                    Date of Releasing: {movieDetails.release_date}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
