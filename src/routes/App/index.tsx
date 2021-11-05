import React, { FC } from 'react';
import Layout from 'components/Layout';
import Slider from 'components/Slider';

import { ISettings } from 'utils/interfaces';

import * as S from './style';

interface IProps {
  settings: ISettings;
}

const App: FC<IProps> = ({ settings }) => (
  <Layout>
    <S.AppWrapper>
      <S.SlideWrapper>
        <Slider />
      </S.SlideWrapper>
    </S.AppWrapper>
  </Layout>
);

export default App;
