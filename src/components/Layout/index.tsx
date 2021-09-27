import React, { FC } from 'react';
import NavBar from 'components/NavBar';
import { useLocation } from 'react-router-dom';

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
  children: React.ReactNode;
  state?: { projects: IProjects };
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
