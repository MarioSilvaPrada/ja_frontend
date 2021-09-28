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
      <S.Option to="/projetos">Projetos</S.Option>
      <S.Option to="/sobre">Sobre</S.Option>
    </div>
  </S.NavContainer>
);

export default NavBar;
