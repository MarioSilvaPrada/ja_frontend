import React, { FC } from 'react';
import NavBar from 'components/NavBar';
import { useLocation } from 'react-router-dom';
import * as S from './style';

interface IProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const Layout: FC<IProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <S.Wrapper pathName={path}>
      <NavBar pathName={path} />
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  );
};

export default Layout;
