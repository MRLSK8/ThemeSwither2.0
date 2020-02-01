import styled from 'styled-components';

export const Container = styled.div`
  height: 4em;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2em;
`;