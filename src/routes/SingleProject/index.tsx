import React, { FC, useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { useParams } from 'react-router-dom';
import { getSingleProject } from 'api';
import { IProjects } from 'utils/interfaces';
import LazyImage from 'components/LazyImage';
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
        {singleProject?.section.map((section) => (
          <div key={section.id}>
            <S.Description>{section.description}</S.Description>
            {section.image.map(({ image }) => (
              <LazyImage
                myWidth="50rem"
                key={`${section.id}${image}`}
                alt="project image"
                src={image}
                actual={<S.Image src={image} />}
              />
            ))}
          </div>
        ))}
      </S.Container>
    </Layout>
  );
};

export default Projetos;
