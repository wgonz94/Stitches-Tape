import React from 'react';
import './Header.css';
import Title from '../../Images/Title.png';

const Header = () => {
  return (
    <section>
      <div className='center'>
        <header className='image'>
          <img className='img responsive-img' src={Title} alt='Title' />
        </header>
      </div>
    </section>
  );
};

export default Header;
