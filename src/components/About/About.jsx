import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiKey from "../../services/api";
import image_path from "../../services/img";
import { Container } from "./aboutStyles";
import { Link } from "react-router-dom";
const About = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-PT`
    )
      .then((response) => response.json())
      .then((data) => {
        const movie = {
          id,
          title: data.title,
          sinopse: data.overview,
          image: `${image_path}${data.poster_path}`,
          releaseDate: data.release_date,
        };
        console.log(movie);
        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="date">Data de lançamento: {movie.releaseDate}</span>

          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default About;
