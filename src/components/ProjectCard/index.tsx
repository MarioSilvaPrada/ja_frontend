import React, { FC } from 'react';
import { IProjects } from 'utils/interfaces';
import LazyImage from 'components/LazyImage';
import * as S from './style';

interface IProps {
  project: IProjects;
}

const ProjectCard: FC<IProps> = ({ project }) => {
  return (
    <S.PressWrapper
      to={{
        pathname: `/projetos/${project.id}`,
        state: { project },
      }}
    >
      <LazyImage
        alt="project image"
        src={project.main_image}
        actual={
          <S.ImageCard imgURL={project.main_image}>
            <S.Layer>
              <p>{project.name}</p>
            </S.Layer>
          </S.ImageCard>
        }
      />
    </S.PressWrapper>
  );
};

export default ProjectCard;
