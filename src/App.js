import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import PetScenario from './components/pages/PetScenario';
import QuizzesPage from './components/pages/QuizzesPage';
import ExamplesPage from './components/pages/ExamplesPage';
import '@fontsource/poppins/700.css';
import '@fontsource/roboto/400.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.background};
    font-family: ${theme.typography.fontFamily.body};
    color: ${theme.colors.text};
    line-height: 1.6;
    min-height: 100vh;
  }

  button {
    font-family: ${theme.typography.fontFamily.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.heading};
    font-weight: ${theme.typography.fontWeight.bold};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<PetScenario />} />
            <Route path="/quizzes" element={<QuizzesPage />} />
            <Route path="/examples" element={<ExamplesPage />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
