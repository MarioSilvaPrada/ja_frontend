import React, { FC } from 'react';
import Layout from 'components/Layout';
import Slider from 'components/Slider';
import { IProjects } from 'utils/interfaces';

import * as S from './style';

interface IProps {
  sliderProjects: Array<IProjects>;
  isEN: boolean;
}

const App: FC<IProps> = ({ sliderProjects, isEN }) => {
  return (
    <Layout>
      <S.AppWrapper>
        <S.SlideWrapper>
          <Slider sliderProjects={sliderProjects} isEN={isEN} />
        </S.SlideWrapper>
      </S.AppWrapper>
    </Layout>
  );
};

export default App;
