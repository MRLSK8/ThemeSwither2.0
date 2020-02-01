import React, { useContext } from 'react';

import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

export default function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello World
      <Switch
        onChange={toggleTheme}
        height={20}
        width={40}
        checked={title === 'dark'}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={colors.secondary}
        handleDiameter={15}
      />
    </Container>
  );
}
