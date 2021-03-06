import styled from 'styled-components';

export const Title = styled.div`
  color: red;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 0.5rem;

  @media (max-width: 26rem) {
    grid-template-columns: 100%;
  }
`;
