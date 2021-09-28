import React, { FC } from 'react';
import NavBar from 'components/NavBar';
import { useLocation } from 'react-router-dom';

import { ISettings } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  state?: { settings: ISettings };
}

const Layout: FC<IProps> = ({ children, state }) => {
  const location = useLocation();

  const path = location.pathname;

  return (
    <S.Wrapper pathName={path}>
      <NavBar pathName={path} globalState={state} />
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  );
};

export default Layout;
