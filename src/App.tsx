import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { marvelTheme, dcTheme, defaultTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/global";


function App() {
  const [team, setTeam] = useState<string>('default');

  return (
    <ThemeProvider theme={team == 'marvel' ? marvelTheme : (team == 'dc' ? dcTheme : defaultTheme)}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home onToggleTeam={(team) => setTeam(team)}/>} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>    
  );
}

export default App;
