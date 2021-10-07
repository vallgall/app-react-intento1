import React, { useState}from 'react';
import './App.css';
import Menu from './Menu';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;



function App() {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    
  return (
      <div className="App">
          <Menu title="Gifs " />
          <div>Busca lo que desees! (localhost:3000/gif/ => y la palabra que quieras.</div>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
              <GlobalStyles />
              <StyledApp>
                  <section className="App-content">
                      <Link to='/gif/jokers'>Gif de Jokers</Link>
                      <Link to='/gif/gatos'>Gif de Gatos</Link>
                      <Link to='/gif/panda'>Gif de Pandas</Link>
                      <button onClick={() => themeToggler()}>Change Theme</button>

          <Route
              component={ListOfGifs}
              path="/gif/:keyword"  />
                  </section>
              </StyledApp>
          </ThemeProvider>
    </div>
  );
}


export default App;
