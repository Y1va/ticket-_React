import axios from 'axios';
import { useState, useEffect } from 'react';
import TopRatedMovies from './TopRatedMovies';
import MovieLoadingSpinner from './MovieLoadingSpinner';

const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // Show top rated movies on home page, will randomly update whenever TMDB gets new top rated movies so it can be dynamic rather than hard coded movies.
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGFiZWQ3YWZiMGZlNWQ2M2MzMTMwYWFlZDU5OWU5YiIsIm5iZiI6MTc3MTg0MDg3MC43Nywic3ViIjoiNjk5YzI1NjZjOTUzMTgzOWZmNmEzY2Q0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.A6dMLe302qdX0-OxCh_vLSAuQ5un6DsXaFjmmT86Jnc',
    },
  };

  async function showTopRatedMovies() {
    const { data } = await axios.request(options);

    const topRated = data.results;

    return setTopRatedMovies(topRated);
  }

  useEffect(() => {
    showTopRatedMovies();
  }, []);

  return (
    <div>
      <section className="movies">
        <div className="container">
          <div className="row">
            <div className="movies__content">
              <div className="movies__list">
                {topRatedMovies.length > 0 ? (
                  topRatedMovies.slice(0, 6).map((topRatedMovie, index) => {
                    return (
                      <TopRatedMovies
                        topRatedMovieProp={topRatedMovie}
                        key={index}
                      />
                    );
                  })
                ) : (
                  <MovieLoadingSpinner />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
