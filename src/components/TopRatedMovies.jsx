import { Link } from 'react-router';

// Component for homepage top rated movies
const TopRatedMovies = ({ topRatedMovieProp }) => {
  return (
    <>
      <div className="movie__search__container top__rated__movie__search-container">
        <div className="movie">
          <figure className="movie__image__wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${topRatedMovieProp?.poster_path}`}
              alt
              className="movie__image"
            />
            <h3 className="movie__image__title">{topRatedMovieProp?.title}</h3>
            <div className="movie__info__list">
              <Link to={`/movies/${topRatedMovieProp.id}`}>
                <button className="find-out-more">Find Out More</button>
              </Link>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default TopRatedMovies;
