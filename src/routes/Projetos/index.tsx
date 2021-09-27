import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProjects } from 'api';
import Layout from 'components/Layout';
import ProjectCard from 'components/ProjectCard';
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
    <Layout>
      <S.Container>
        {allProjects.map((el) => (
          <ProjectCard
            key={el.id}
            imgURL={el.main_image}
            name={el.name}
            id={el.id}
          />
        ))}
      </S.Container>
    </Layout>
  );
};

export default Projetos;
