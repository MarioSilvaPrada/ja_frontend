import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

type NavProps = {
  pathName: string;
};

export const NavContainer = styled.div<NavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 2rem;
  color: ${({ pathName }) => (pathName === '/' ? 'white' : 'black')};
`;

export const Home = styled(Link)``;

export const Option = styled(NavLink)`
  margin-left: 1.2rem;
`;
