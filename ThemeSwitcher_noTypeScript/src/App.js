import React from 'react';
import GlobalStyle from './styles/Global';
import Header from './components/header';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
