import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4em;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;