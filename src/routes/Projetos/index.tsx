import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProjects } from 'api';

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

const Page1: FC = () => {
  const location = useLocation();

  const [allProjects, setAllProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await getProjects();
    if (res) {
      console.log({ res });

      setAllProjects(res);
    }
  };

  useEffect(() => {
    const { projects }: { projects?: Array<IProjects> } = location.state || [];

    if (projects) {
      setAllProjects(projects);
    } else {
      fetchProjects();
    }
  }, []);
  return (
    <S.Wrapper>
      <h1>Page 1</h1>
      <S.Container>
        {allProjects.map((el) => (
          <S.ImageCard key={el.id} imgURL={el.main_image}>
            <h1>{el.name}</h1>
          </S.ImageCard>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default Page1;
