import React from 'react';
import Movies from './Movies';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <>
      <section className="landing__page">
        <Navbar />
        <Movies />
      </section>
    </>
  );
};

export default LandingPage;
