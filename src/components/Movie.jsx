import { Link } from 'react-router';

// Component to render movies on the Movies page
const Movie = ({ movieProp, MovieSkeleton }) => {
  return (
    <>
      <div className="movie__search__container">
        <div className="movie">
          <figure className="movie__image__wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieProp?.poster_path}`}
              alt
              className="movie__image"
            />
            <h3 className="movie__image__title">{movieProp?.original_title}</h3>
            <div className="movie__info__list">
              <Link to={`/movies/${movieProp.id}`}>
                <button className="find-out-more">Find Out More</button>
              </Link>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Movie;
