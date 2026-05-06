import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import searchImage from '../assets/searchImage.svg';
import Movie from '../components/Movie';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router';
import MovieCardSkeleton from '../ui/MovieCardSkeleton';

const Moviespage = () => {
  const { movies, search, setSearch, searchMovies } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="movies__page">
        <Link className="movies__page__back-arrow" to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <div className="movies__page__movies">
          {loading ? (
            <MovieCardSkeleton />
          ) : (
            <>
              <form onSubmit={searchMovies} className="movies__search">
                <div className="movies__search__input">
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="movies__input"
                    type="text"
                    placeholder="Search for a movie"
                  />
                </div>
                <button className="movies__search__btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
              <div className="movies__display">
                {movies.length > 0 ? (
                  movies.slice(0, 6).map((movie, index) => {
                    return <Movie movieProp={movie} key={index} />;
                  })
                ) : (
                  <>
                    <div className="search__image">
                      <figure className="movies__search__img__wrapper">
                        <img
                          className="movies__search__img"
                          src={searchImage}
                        />
                      </figure>
                      <h1 className="movies__header">
                        Waiting for your Search...
                      </h1>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Moviespage;
