import React from 'react';
import './Header.css';
import Title from '../../Images/Title.png';

const Header = () => {
  return (
    <section>
      <div className='center'>
        <header className='image'>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <img src={Title} alt='Title' />
        </header>
      </div>
    </section>
  );
};

export default Header;
