import { Container, MovieList, Movie } from "./homeStyles";
import React from "react";
import apiKey from "../../services/api";
import image_path from "../../services/img";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //fazendo o fetching da api
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-PT&page=1

      `
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <Container>
      <h1>Popular Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img src={`${image_path}${movie.poster_path}`} />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
