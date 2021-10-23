import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  margin: 0 0 1rem;
  line-height: 1.6rem;
  display: inline-block;
  font-size: 0.8rem;
`;

export const Image = styled.img`
  width: 100%;
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
  font-weight: bold;
  display: block;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const Column = styled.div`
  &:first-child {
    margin-right: 0.8rem;
  }
`;

export const TagContainer = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid black;
  border-radius: 0.3rem;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const RowInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const RowTitle = styled.h5`
  margin-right: 0.2rem;
`;

export const Fixed = styled.div`
  position: sticky;
  top: 0.8rem;
`;
