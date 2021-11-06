import React, { FC } from 'react';
import Layout from 'components/Layout';
import Slider from 'components/Slider';
import { IProjects } from 'utils/interfaces';

import * as S from './style';

interface IProps {
  sliderProjects: Array<IProjects>;
}

const App: FC<IProps> = ({ sliderProjects }) => (
  <Layout>
    <S.AppWrapper>
      <S.SlideWrapper>
        <Slider sliderProjects={sliderProjects} />
      </S.SlideWrapper>
    </S.AppWrapper>
  </Layout>
);

export default App;
