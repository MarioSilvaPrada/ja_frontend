import React, { FC, useEffect, useState } from 'react';
import * as S from './style';

import { Link } from 'react-router-dom';
import social from 'utils/social';
import { getSettings } from 'api';

const App: FC = () => {
  interface ISettings {
    main_background_image: string;
  }

  const [settings, setSettings] = useState<ISettings | null>(null);

  const getSiteSettings = async () => {
    const res = await getSettings();
    if (res) {
      setSettings(res);
      console.log(res);
    }
  };
  useEffect(() => {
    getSiteSettings();
  }, []);
  return (
    <S.Container urlImage={settings?.main_background_image || ''}>
      <S.Layer />
      <S.Content>
        <S.TopHeader>
          <S.Title>João Afonso</S.Title>
          <S.OptionsWrapper>
            <Link to="projetos">
              <S.Option>Projetos</S.Option>
            </Link>
            <Link to="sobre">
              <S.Option>Sobre</S.Option>
            </Link>
          </S.OptionsWrapper>
        </S.TopHeader>
        <S.SocialWrapper>
          {social.map(({ Icon, url }) => (
            <S.SocialLink href={url} key={url} target="blank">
              {Icon}
            </S.SocialLink>
          ))}
        </S.SocialWrapper>
      </S.Content>
    </S.Container>
  );
};

export default App;
