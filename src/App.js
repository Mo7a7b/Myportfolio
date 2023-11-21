import ResponsiveAppBar from './components/AppBar';
import { React, useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeContext } from './contexts/theme';
function App() {
  let [theme, setTheme] = useState('wb')
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [])

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ResponsiveAppBar />
        <Main />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
