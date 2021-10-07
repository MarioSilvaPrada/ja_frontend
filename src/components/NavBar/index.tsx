import React, { FC } from 'react';
import * as S from './style';

interface IProps {
  pathName: string;
}

const NavBar: FC<IProps> = ({ pathName }) => (
  <S.NavContainer pathName={pathName}>
    <S.Home to="/">
      <p>João Afonso</p>
    </S.Home>
    <div>
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
    </div>
  </S.NavContainer>
);

export default NavBar;
