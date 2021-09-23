import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';

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

const Page1: FC = () => {
  const location = useLocation();

  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const { state } = location;

    const pro: IProjects = state.projects;
    console.log({ state: state.projects });
    if (pro) {
      setAllProjects(pro);
    }
  }, []);
  return (
    <S.Wrapper>
      <h1>Page 1</h1>
      {allProjects.map((el) => (
        <h1>{el.name}</h1>
      ))}
    </S.Wrapper>
  );
};

export default Page1;
