import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

export const Home = styled(Link)`
  font-size: 1rem;
`;

export const Option = styled(NavLink)`
  margin-left: 1.2rem;
  font-size: 1rem;
`;
