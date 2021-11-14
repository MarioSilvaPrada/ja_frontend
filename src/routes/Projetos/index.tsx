import React, { FC, useEffect, useState } from 'react';
import { getProjects } from 'api';
import Layout from 'components/Layout';
import ProjectCard from 'components/ProjectCard';
import { IProjects } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  projects: Array<IProjects>;
}

const Projetos: FC<IProps> = ({ projects }) => {
  const [allProjects, setAllProjects] = useState<Array<IProjects>>([]);

  const fetchProjects = async () => {
    const res = await getProjects();
    if (res) {
      setAllProjects(res);
    }
  };

  useEffect(() => {
    if (projects) {
      setAllProjects(projects);
    } else {
      fetchProjects();
    }
  }, []);

  return (
    <Layout>
      <S.Container>
        {allProjects
          .sort((a, b) => {
            if (a.position < b.position) {
              return -1;
            }
            if (a.position > b.position) {
              return 1;
            }
            return 0;
          })
          .map((el) => (
            <ProjectCard key={el.id} project={el} />
          ))}
      </S.Container>
    </Layout>
  );
};

export default Projetos;
