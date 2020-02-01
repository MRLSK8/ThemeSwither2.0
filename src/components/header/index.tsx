import React, { useContext } from 'react';
import { shade } from 'polished';
import { Container } from './style';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello world
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={50}
        handleDiameter={14}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
