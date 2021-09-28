import React, { FC, useEffect, useState } from 'react';
import Layout from 'components/Layout';

import social from 'utils/social';
import { getSettings } from 'api';
import { ISettings } from 'utils/interfaces';

import * as S from './style';

const App: FC = () => {
  const [settings, setSettings] = useState<ISettings | null>(null);

  const getData = async () => {
    const mySettings = await getSettings();
    if (mySettings) {
      setSettings(mySettings);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <S.Container urlImage={settings?.main_background_image || ''}>
      {settings?.main_background_image && <S.Layer />}
      <Layout state={{ settings }}>
        <S.SocialWrapper>
          {social.map(({ Icon, url }) => (
            <S.SocialLink href={url} key={url} target="blank">
              {Icon}
            </S.SocialLink>
          ))}
        </S.SocialWrapper>
      </Layout>
    </S.Container>
  );
};

export default App;
