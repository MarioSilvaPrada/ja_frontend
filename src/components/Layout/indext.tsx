import React, { FC } from 'react';
// import { useLocation } from 'react-router-dom';

import * as S from './style';

interface IProps {
  children: React.ReactNode;
  title: string;
}

const Layout: FC<IProps> = ({ children, title }) => {
  //   const location = useLocation();

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  );
};

export default Layout;
