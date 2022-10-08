import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterSize from "./filterSize";
import Movie from "./Movie";
import "./MovieList.css";
import { filter } from "./moviesReducer";
const MovieList = () => {
  const movies = useSelector((state) => state.movies.filteredMovies);
  const action = useSelector((state) => state.movies.sizeAction);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            dispatch(filter({ name: e.target.value, size: action }));
          }}
        />
      </div>

      <FilterSize />

      <div className="main">
        {movies.map((movie) => (
          <Movie
            name={movie.name}
            url={movie.url}
            desciption={movie.desciption}
            rating={movie.rating}
            size={movie.size}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
