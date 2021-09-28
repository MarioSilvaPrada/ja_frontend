import React, { FC, useEffect, useState } from 'react';
import Layout from 'components/Layout';
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
  const { state } = location;

  console.log({ location, state });

  return (
    <Layout>
      <S.Container>
        <S.Title>{state?.project.name}</S.Title>
      </S.Container>
    </Layout>
  );
};

export default Projetos;
