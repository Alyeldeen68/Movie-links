import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      name: "The Shawshank Redemption",
      rating: 9,
      size: "L",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      name: "Se7en",
      rating: 8,
      size: "M",
      url: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    },
    {
      name: "The Pianist",
      rating: 8,
      size: "S",
      url: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    },
    {
      name: "Toy Story 3",
      rating: 6,
      size: "L",
      url: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
      description:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college.",
    },
  ],
  filteredMovies: [
    {
      name: "The Shawshank Redemption",
      rating: 9,
      size: "L",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      name: "Se7en",
      rating: 8,
      size: "M",
      url: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    },
    {
      name: "The Pianist",
      rating: 8,
      size: "S",
      url: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    },
    {
      name: "Toy Story 3",
      rating: 6,
      size: "L",
      url: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
      description:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college.",
    },
  ],
  nameAction: "",
  sizeAction: "",
  movieData: {
    name: "",
    rating: "",
    size: "",
    url: "",
    description: "",
  },
};

const moviesReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    filter: (state, action) => {
      console.log(action.payload.name + "And " + action.payload.size);
      if (action.payload.name && action.payload.size) {
        state.filteredMovies = state.movies.filter((movie) => {
          return (
            movie.name
              .toLowerCase()
              .includes(action.payload.name.toLowerCase()) &&
            movie.size.includes(action.payload.size)
          );
        });
        state.nameAction = action.payload.name;
        state.sizeAction = action.payload.size;
      } else if (action.payload.name) {
        state.filteredMovies = state.movies.filter((movie) => {
          return movie.name
            .toLowerCase()
            .includes(action.payload.name.toLowerCase());
        });
        state.nameAction = action.payload.name;
        state.sizeAction = action.payload.size;
      } else if (action.payload.size) {
        state.filteredMovies = state.filteredMovies.filter((movie) => {
          return movie.size.includes(action.payload.size);
        });
        state.sizeAction = action.payload.size;
        state.nameAction = action.payload.name;
      } else {
        state.filteredMovies = state.movies;
        state.sizeAction = action.payload.size;
        state.nameAction = action.payload.name;
      }
    },
    movieCard: (state, action) => {
      state.movieData.name = action.payload.name;
      state.movieData.url = action.payload.url;
      state.movieData.description = action.payload.description;
      state.movieData.rating = action.payload.rating;
      state.movieData.size = action.payload.size;
    },
  },
});

export const { filter, movieCard } = moviesReducer.actions;
export default moviesReducer.reducer;
