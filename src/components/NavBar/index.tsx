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
        to="/projetos"
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        Projects
      </S.Option>
      <span>•</span>
      <S.Option
        to="/sobre"
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        About
      </S.Option>
    </S.OptionsWrapper>
  </S.NavContainer>
);

export default NavBar;
