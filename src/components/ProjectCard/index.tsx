import React, { FC } from 'react';
import { IProjects } from 'utils/interfaces';
import LazyImage from 'components/LazyImage';
import * as S from './style';

interface IProps {
  project: IProjects;
  isEN: boolean;
}

const ProjectCard: FC<IProps> = ({ project, isEN }) => {
  return (
    <S.PressWrapper
      to={{
        pathname: `/works/${project.id}`,
        state: { project },
      }}
    >
      <LazyImage
        alt="project image"
        src={project.main_image}
        actual={
          <S.ImageCard imgURL={project.main_image}>
            <S.HoverImage imgURL={project.hover_image}>
              <S.Layer>
                <S.H3>{isEN ? project.name_en : project.name}</S.H3>
              </S.Layer>
            </S.HoverImage>
          </S.ImageCard>
        }
      />
    </S.PressWrapper>
  );
};

export default ProjectCard;
