import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  margin-bottom: 0.5rem;

  @media (max-width: 650px) {
    margin-bottom: 1rem;
  }
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
  margin-bottom: 0.5rem;

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
  display: flex;
  position: relative;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Column = styled.div`
  &:first-child {
    margin-right: 0.8rem;
  }

  @media (max-width: 650px) {
    &:first-child {
      margin-right: 0;
    }
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
  margin-bottom: 0.5rem;
`;

export const RowInfo = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const RowTitle = styled.h5`
  margin-right: 0.2rem;
`;

export const SideInfo = styled.div`
  position: absolute;
  right: -20rem;
  height: 100%;
  padding-right: 0.5rem;
`;

// left: ${({ theme }) => theme.sizes.maxWidth};

export const Fixed = styled.div`
  position: sticky;
  top: 0.8rem;
  right: 0;
  width: 100%;
  @media (max-width: 650px) {
    position: static;
  }
`;
