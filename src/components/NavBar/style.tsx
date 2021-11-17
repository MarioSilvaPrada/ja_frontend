import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

interface IProps {
  isSelected: boolean;
}

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding-top: 1rem;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  position: relative;
  margin-bottom: 3rem;
`;

export const Home = styled(Link)`
  font-size: 1rem;
`;

export const OptionsWrapper = styled.div`
  text-transform: uppercase;
  a:not(:last-child) {
    margin-right: 1rem;
  }
  span {
    margin-right: 1rem;
  }
`;

export const Option = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledImage = styled.img`
  width: 8rem;
  margin-bottom: 3rem;
`;

export const TranslationWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 0;
`;

export const LangPress = styled.button<IProps>`
  text-transform: uppercase;
  border: none;
  background: none;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? 'regular' : 'bold')};

  &:first-child {
    border-right: 2px solid;
  }
`;
