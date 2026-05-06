import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import MovieSkeleton from '../ui/MovieSkeleton';

const Movieinfopage = ({ movies }) => {
  const [movieId, setMovieId] = useState({});
  const [recMovies, setRecMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);
  const { id } = useParams();

  // Get movie by ID
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGFiZWQ3YWZiMGZlNWQ2M2MzMTMwYWFlZDU5OWU5YiIsIm5iZiI6MTc3MTg0MDg3MC43Nywic3ViIjoiNjk5YzI1NjZjOTUzMTgzOWZmNmEzY2Q0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.A6dMLe302qdX0-OxCh_vLSAuQ5un6DsXaFjmmT86Jnc',
    },
  };

  // Show recommended movies based of current selected movie
  const optionsRec = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/similar`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGFiZWQ3YWZiMGZlNWQ2M2MzMTMwYWFlZDU5OWU5YiIsIm5iZiI6MTc3MTg0MDg3MC43Nywic3ViIjoiNjk5YzI1NjZjOTUzMTgzOWZmNmEzY2Q0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.A6dMLe302qdX0-OxCh_vLSAuQ5un6DsXaFjmmT86Jnc',
    },
  };

  async function findMovieById() {
    try {
      const { data } = await axios.request(options);
      const movieIdData = data;

      // data has arrived and stored in state
      return movieIdData;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  async function showRecommendedMovies() {
    try {
      const { data } = await axios.request(optionsRec);
      const recommendedMovies = data.results;

      // data has arrived and stored in state
      return recommendedMovies;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  useEffect(() => {
    setImgLoading(true);
    setLoading(true);
    setRecMovies([]);

    Promise.all([findMovieById(), showRecommendedMovies()]).then(
      ([movieId, recMovie]) => {
        setMovieId(movieId);
        setRecMovies(recMovie);
        setLoading(false);
      },
    );
  }, [id]);

  console.log('render — loading:', loading, 'imgLoading:', imgLoading);
  return (
    <>
      <section className="movie__info__page-section">
        <>
          {(loading || imgLoading) && <MovieSkeleton />}

          <div
            style={
              loading || imgLoading
                ? { visibility: 'hidden', position: 'absolute' }
                : { visibility: 'visible' }
            }
            className="movie__info__page-container"
          >
            <Link className="movies__info__page__back-arrow" to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <img
              onLoad={() => {
                setImgLoading(false);
              }}
              src={`https://image.tmdb.org/t/p/w400${movieId.poster_path}`}
              className="movie__info__page__img"
            />
            <div className="movie__info__page__text-container">
              <div className="movie__info__page__text">
                <h1>{movieId.original_title}</h1>
                <div className="movie__info__page__details">
                  <p className="release__date">
                    {movieId.release_date} <span className="dot">.</span>
                  </p>
                  <p className="runtime">
                    {movieId.runtime} min <span className="dot">.</span>
                  </p>
                  <p>{Math.floor(movieId.vote_average)}⭐</p>
                  <div>|</div>
                  <div className="movie__info__page__genres">
                    {movieId.genres?.map((genre, index) => {
                      return <p key={index}>{genre.name}</p>;
                    })}
                  </div>
                </div>
                <h3>Overview:</h3>
                <p className="movie__info__page__overview">
                  {movieId.overview}
                </p>
                <button className="movie__info__page__play">Play Now</button>
              </div>
            </div>
          </div>
          <div
            style={
              loading || imgLoading
                ? { visibility: 'hidden', position: 'absolute' }
                : { visibility: 'visible' }
            }
            className="recommended__movies-container"
          >
            <h2 className="recommended__movies__title">Recommended Movies:</h2>
            <div className="recommended__movies">
              {recMovies
                ?.filter((movie) => movie.id !== movieId.id)
                .slice(0, 6)
                .map((movie) => (
                  <Link to={`/movies/${movie.id}`}>
                    <Movie movieProp={movie} />
                  </Link>
                ))}
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default Movieinfopage;
