import React, { useEffect } from 'react';
import M from 'materialize-css';
import midbg from '../../Images/midbg.jpg';
import logobg from '../../Images/logobg.jpg';
import About from './About';

const Parallax = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('.parallax');
    M.Parallax.init(elements);
  }, []);

  return (
    <section>
      <div className='parallax-container'>
        <div className='parallax'>
          <img src={midbg} />
        </div>
      </div>
      <About />
      <div className='parallax-container'>
        <div className='parallax'>
          <img src={logobg} />
        </div>
      </div>
    </section>
  );
};

export default Parallax;
