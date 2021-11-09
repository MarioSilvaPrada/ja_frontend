import React, { FC } from 'react';

import logo from '../../assets/logo.svg';
import * as S from './style';

const NavBar: FC = () => (
  <S.NavContainer>
    <S.Home to="/">
      <S.StyledImage src={logo} alt="logo" />
    </S.Home>
    <S.OptionsWrapper>
      <S.Option
        to="/works"
        activeStyle={{
          fontWeight: 'normal',
        }}
      >
        Works
      </S.Option>
      <span>•</span>
      <S.Option
        to="/studio"
        activeStyle={{
          fontWeight: 'normal',
        }}
      >
        Studio
      </S.Option>
    </S.OptionsWrapper>
  </S.NavContainer>
);

export default NavBar;
