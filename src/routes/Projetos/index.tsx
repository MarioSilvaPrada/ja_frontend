import React, { FC, useEffect, useState } from 'react';
import { getProjects } from 'api';
import Layout from 'components/Layout';
import ProjectCard from 'components/ProjectCard';
import { IProjects } from 'utils/interfaces';
import * as S from './style';

const Projetos: FC = () => {
  const [allProjects, setAllProjects] = useState<Array<IProjects>>([]);

  const fetchProjects = async () => {
    const res = await getProjects();
    console.log({ res });
    if (res) {
      setAllProjects(res);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Layout>
      <S.Container>
        {allProjects.map((el) => (
          <ProjectCard key={el.id} project={el} />
        ))}
      </S.Container>
    </Layout>
  );
};

export default Projetos;
