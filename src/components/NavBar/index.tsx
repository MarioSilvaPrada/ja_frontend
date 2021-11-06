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
        Projetos
      </S.Option>
      <S.Option
        to="/sobre"
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        Sobre
      </S.Option>
    </S.OptionsWrapper>
  </S.NavContainer>
);

export default NavBar;
