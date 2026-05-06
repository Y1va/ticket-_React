import Logo from '../assets/movielogo.png';
import movieBackground from '../assets/moviebackground.jpg';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, Link } from 'react-router';

const Navbar = () => {
  const { search, setSearch, searchMovies } = useContext(AppContext);
  const navigate = useNavigate();

  function navigateToMovies(event) {
    event.preventDefault();
    navigate('/movies');
    searchMovies();
  }

  return (
    <div>
      <div className="movie__background">
        <figure className="movie__background__wrapper">
          <div className="nav__container">
            <div className="nav__left">
              <figure className="nav__logo__wrapper">
                <img src={Logo} alt="" className="nav__logo" />
              </figure>
              <Link to={'/'} className="nav__link">
                Home
              </Link>

              <Link to={'/movies'} className="nav__link">
                Movies
              </Link>
            </div>
          </div>
          <img
            src={movieBackground}
            alt=""
            className="movie__background__image"
          />
        </figure>
        <div className="movie__background__text">
          <h1 className="movie__background__header">
            Ticket<span className="textcolor header__plus">+</span>
          </h1>
          <h3 className="movie__background__para">
            With over <span className="textcolor">3000</span> movies on Ticket
            <span className="textcolor">+</span>, the possibilities are endless!
          </h3>
          <div className="movie__background__search">
            <div className="movie__input__wrapper">
              <form onSubmit={navigateToMovies}>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  type="text"
                  className="movie__input"
                  placeholder="Find a movie"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
