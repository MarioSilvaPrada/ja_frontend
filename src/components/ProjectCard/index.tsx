import React, { FC } from 'react';
import * as S from './style';

interface IProps {
  imgURL: string;
  name: string;
  id: number;
}

const ProjectCard: FC<IProps> = ({ imgURL, name, id }) => {
  return (
    <S.PressWrapper to={`/projetos/${id}`}>
      <S.ImageCard imgURL={imgURL}>
        <S.Layer>
          <p>{name}</p>
        </S.Layer>
      </S.ImageCard>
    </S.PressWrapper>
  );
};

export default ProjectCard;
