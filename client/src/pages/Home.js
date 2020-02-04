import React, { useContext } from 'react';
import Header from '../Components/Home/Header';
import Title from '../Components/Home/Title';
import About from '../Components/Home/About';
import Parallax from '../Components/Home/Parallax';
import {UserGenerate} from '../Context/UserContext'

export function Home() {
  const {user} = useContext(UserGenerate)

    return (
      <div>
        <pre> {JSON.stringify(user, null, 2)}</pre>
        <Header />
        <main>
          <Title />
          <Parallax />
          <About />
        </main>
      </div>
    );
  
}

export default Home;
