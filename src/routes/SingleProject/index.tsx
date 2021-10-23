import React, { FC, useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { useParams } from 'react-router-dom';
import { getSingleProject } from 'api';
import { IProjects } from 'utils/interfaces';
import LazyImage from 'components/LazyImage';
import getTextParagraphs from 'utils/textParagraph';

import * as S from './style';

interface LocationProps {
  location: {
    state: {
      project: IProjects;
    };
  };
  getNameTags: (id: number) => string;
}

const Projetos: FC<LocationProps> = ({ location, getNameTags }) => {
  const [singleProject, setSingProject] = useState<IProjects | null>(null);
  console.log({ location });
  const { id }: { id: string } = useParams();

  useEffect(() => {
    const getProject = async (projectId: string) => {
      const res = await getSingleProject(projectId);
      if (res) {
        setSingProject(res);
      }
    };
    if (location?.state?.project) {
      setSingProject(location?.state.project);
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
            {getTextParagraphs(section.description, S.Description)}
            {section.image.map(({ image }) => (
              <LazyImage
                myWidth="45rem"
                key={`${section.id}${image}`}
                alt="project image"
                src={image}
                actual={<S.Image src={image} />}
              />
            ))}
            {singleProject.tags.map((tagId) => (
              <p key={tagId}>{getNameTags(tagId)}</p>
            ))}
          </div>
        ))}
        <S.StyledLink to="/projetos">Voltar para Projetos</S.StyledLink>
      </S.Container>
    </Layout>
  );
};

export default Projetos;
