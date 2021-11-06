import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
  margin-bottom: 2rem;
`;

export const Home = styled(Link)`
  font-size: 1rem;
`;

export const OptionsWrapper = styled.div`
  a:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const Option = styled(NavLink)`
  font-size: 1rem;
`;

export const StyledImage = styled.img`
  width: 3rem;
  margin-bottom: 1rem;
`;
