import React, { FC } from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import { useLocation } from 'react-router-dom';
import * as S from './style';

interface IProps {
  children: JSX.Element;
}

const Layout: FC<IProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <S.Wrapper pathName={path}>
      <NavBar />
      <S.Body>{children}</S.Body>
      <Footer />
    </S.Wrapper>
  );
};

export default Layout;
