import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProjects } from 'api';
import Layout from 'components/Layout';
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

const Projetos: FC = () => {
  const location = useLocation();

  const [allProjects, setAllProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await getProjects();
    if (res) {
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
    <Layout title="Projetos">
      <S.Container>
        {allProjects.map((el) => (
          <S.ImageCard key={el.id} imgURL={el.main_image}>
            <h1>{el.name}</h1>
          </S.ImageCard>
        ))}
      </S.Container>
    </Layout>
  );
};

export default Projetos;
