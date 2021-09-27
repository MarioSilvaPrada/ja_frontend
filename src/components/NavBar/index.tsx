import React, { FC } from 'react';
import * as S from './style';

interface IProjects {
  id: number;
  main_image: string;
  name: string;
  section: Array<{
    description: string;
    id: number;
    image: Array<string>;
    project: number;
    section_name: string;
  }>;
}

interface IProps {
  pathName: string;
  globalState: { projects: IProjects };
}

const NavBar: FC<IProps> = ({ pathName, globalState }) => {
  return (
    <S.NavContainer pathName={pathName}>
      <S.Home to="/">
        <p>João Afonso</p>
      </S.Home>
      <div>
        <S.Option
          to={{
            pathname: 'projetos',
            state: { projects: globalState?.projects },
          }}
        >
          Projetos
        </S.Option>
        <S.Option to="/sobre">Sobre</S.Option>
      </div>
    </S.NavContainer>
  );
};

export default NavBar;
