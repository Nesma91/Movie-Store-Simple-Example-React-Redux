import React, { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";
import { axiosInstance } from "../networks/axiosConfig";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/popular?api_key=6f2b7822a1c75da0790618a9387cf2bf")
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1
        className="col-6 mb-5 row justify-content-center bolder"
        style={{ marginLeft: "25%", marginTop: "4%" }}
      >
        Movies...
      </h1>
      <div className="row  g-1">
        {movies.map((movie) => {
          return (
            <div className="col-6 col-md-4 mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
