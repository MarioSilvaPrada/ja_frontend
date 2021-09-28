import React, { FC, useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { useParams } from 'react-router-dom';
import { getSingleProject } from 'api';
import { IProjects } from 'utils/interfaces';
import * as S from './style';

interface LocationProps {
  location: {
    state: {
      project: IProjects;
    };
  };
}

const Projetos: FC<LocationProps> = ({ location }) => {
  const [singleProject, setSingProject] = useState<IProjects | null>(null);
  const { state } = location;
  const { id }: { id: string } = useParams();

  const getProject = async (projectId: string) => {
    const res = await getSingleProject(projectId);
    if (res) {
      setSingProject(res);
    }
  };

  useEffect(() => {
    if (state?.project) {
      setSingProject(state.project);
    } else {
      getProject(id);
    }
  }, []);

  return (
    <Layout>
      <S.Container>
        <S.Title>{singleProject?.name}</S.Title>
      </S.Container>
    </Layout>
  );
};

export default Projetos;
