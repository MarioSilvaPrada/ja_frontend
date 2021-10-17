import React, { FC } from 'react';
import Layout from 'components/Layout';

import social from 'utils/social';
import { ISettings } from 'utils/interfaces';

import * as S from './style';

interface IProps {
  settings: ISettings;
}

const App: FC<IProps> = ({ settings }) => (
  <S.Container urlImage={settings?.main_background_image || ''}>
    {settings?.main_background_image && <S.Layer />}
    <Layout>
      <S.SocialWrapper>
        {social.map(({ Icon, url }) => (
          <S.SocialLink href={url} key={url} target="blank">
            {Icon()}
          </S.SocialLink>
        ))}
      </S.SocialWrapper>
    </Layout>
  </S.Container>
);

export default App;
