import React from 'react';

const MovieCardSkeleton = () => {
  return (
    <>
      <div className="movie__card__container--skeleton">
        <div className="movie__card--skeleton"></div>
        <div className="movie__card--skeleton"></div>
        <div className="movie__card--skeleton"></div>
        <div className="movie__card--skeleton"></div>
        <div className="movie__card--skeleton"></div>
        <div className="movie__card--skeleton"></div>
      </div>
    </>
  );
};

export default MovieCardSkeleton;
