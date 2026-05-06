import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Moviespage from './pages/Moviespage';
import Movieinfopage from './pages/Movieinfopage';
import { AppContext } from './context/AppContext';
import axios from 'axios';
import { useState } from 'react';
import MovieSkeleton from './ui/MovieSkeleton';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  // Get movie from search query
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie`,
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
      query: search,
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGFiZWQ3YWZiMGZlNWQ2M2MzMTMwYWFlZDU5OWU5YiIsIm5iZiI6MTc3MTg0MDg3MC43Nywic3ViIjoiNjk5YzI1NjZjOTUzMTgzOWZmNmEzY2Q0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.A6dMLe302qdX0-OxCh_vLSAuQ5un6DsXaFjmmT86Jnc',
    },
  };

  async function searchMovies(event) {
    event?.preventDefault();

    try {
      const { data } = await axios.request(options);

      const movieData = data.results;

      setMovies(movieData);
      setSearch('');
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <>
      <AppContext.Provider
        value={{ searchMovies, movies, search, setSearch, MovieSkeleton }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies" element={<Moviespage />} />
            <Route path="/movies/:id" element={<Movieinfopage />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
