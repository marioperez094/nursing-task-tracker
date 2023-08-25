//External Imports
import React from 'react';


//Components
import { useThemeContext } from '../../context/ThemeContext';

//Functions

//Style Import
import './Home.css'

const Home = () => {
  const { setTheme } = useThemeContext();

  return (
    <>
      <main className='container-fluid shadow-lg p-3 my-3 bg-body rounded'>
        <section>
        </section>
      </main>
    </>
  )
}

export default Home;