import React, { FC } from 'react';

import translation from '../../../translations/en_pt.js';

import logo from '../../assets/logo.png';
import * as S from './style';

interface IProps {
  isEN: boolean;
  setIsEN: (bool: boolean) => void;
}

const NavBar: FC<IProps> = ({ isEN, setIsEN }) => (
  <S.NavContainer>
    <S.Home to="/">
      <S.StyledImage src={logo} alt="logo" />
    </S.Home>
    <S.OptionsWrapper>
      {/* <S.Option
        to="/works"
        activeStyle={{
          fontWeight: 'normal',
        }}
      >
        {translation[isEN ? 'EN' : 'PT'].HEADER.WORKS}
      </S.Option>
      <span>•</span>
      <S.Option
        to="/studio"
        activeStyle={{
          fontWeight: 'normal',
        }}
      >
        {translation[isEN ? 'EN' : 'PT'].HEADER.STUDIO}
      </S.Option> */}
    </S.OptionsWrapper>
  </S.NavContainer>
);

export default NavBar;
