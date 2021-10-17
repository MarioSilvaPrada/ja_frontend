import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h3``;

export const Description = styled.p`
  margin: 0.5rem 0;
  max-width: 45rem;
  line-height: 1.6rem;
  display: inline-block;
  font-size: 0.8rem;
`;

export const Image = styled.img`
  width: 45rem;
  display: inline-block;
  margin-bottom: 1rem;

  @media (max-width: 45.5rem) {
    width: 100%;
  }
`;

export const Container = styled.div`
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const StyledLink = styled(Link)`
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  display: block;
`;
