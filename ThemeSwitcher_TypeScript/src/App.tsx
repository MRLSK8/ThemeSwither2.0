import React from 'react';
import Header from './components/header';
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Light from './styles/themes/light';
import Dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', Light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? Dark : Light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
};

export default App;
