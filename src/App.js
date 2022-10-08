import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";
import MovieList from "./MovieList";
import API from "./API";
import { Routes, Route } from "react-router-dom";
import MovieData from "./MovieData";
import { useSelector } from "react-redux";

function App() {
  const movie = useSelector((state) => state.movies.movieData);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route
          path="/movie"
          element={
            <MovieData
              name={movie.name}
              url={movie.url}
              description={movie.description}
              rating={movie.rating}
              size={movie.size}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
