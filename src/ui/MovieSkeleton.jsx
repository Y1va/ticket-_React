import React from 'react';

const MovieSkeleton = () => {
  return (
    <>
      <section className="movie__info__page-section">
        <div className="movie__info__page-container">
          <div className="selected-movie__arrow--skeleton"></div>
          <div className="movie__info__page__img movie__info__page__img--skeleton" />
          <div className="movie__info__page__text-container">
            <div className="movie__info__page__text">
              <div className="movie__info__page__title--skeleton" />
              <div className="movie__info__page__details--skeleton">
                <div className="movie__info__page__detail--skeleton" />
                <div className="movie__info__page__detail--skeleton" />
                <div className="movie__info__page__detail--skeleton" />
                <div className="movie__info__page__divider--skeleton" />
                <div className="movie__info__page__genres--skeleton">
                  <div className="movie__info__page__genre--skeleton" />
                  <div className="movie__info__page__genre--skeleton" />
                  <div className="movie__info__page__genre--skeleton" />
                </div>
              </div>
              <div className="movie__info__page__subtitle--skeleton" />
              <div className="movie__info__page__overview--skeleton" />
              <div className="movie__info__page__play movie__info__page__play--skeleton" />
            </div>
          </div>
        </div>

        <div className="recommended__movies-container">
          <div className="recommended__movies__title recommended__movies__title--skeleton" />
          <div className="recommended__movies">
            <div className="recommended__movie__card--skeleton" />
            <div className="recommended__movie__card--skeleton" />
            <div className="recommended__movie__card--skeleton" />
            <div className="recommended__movie__card--skeleton" />
            <div className="recommended__movie__card--skeleton" />
            <div className="recommended__movie__card--skeleton" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieSkeleton;
