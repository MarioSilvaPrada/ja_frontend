import React, { FC, useEffect, useState } from 'react';
import * as S from './style';

import { Link } from 'react-router-dom';
import social from 'utils/social';
import { getSettings, getProjects } from 'api';

const App: FC = () => {
  interface ISettings {
    main_background_image: string;
  }

  interface IProjects {
    id: number;
    main_image: string;
    name: string;
    section: Array<{
      description: string;
      id: number;
      image: Array<string>;
      project: number;
      section_name: string;
    }>;
  }

  const [settings, setSettings] = useState<ISettings | null>(null);
  const [projects, setProjects] = useState<IProjects | null>(null);

  const getData = async () => {
    const mySettings = await getSettings();
    const myProjects = await getProjects();
    if (mySettings) {
      setSettings(mySettings);
    }

    if (myProjects) {
      setProjects(myProjects);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <S.Container urlImage={settings?.main_background_image || ''}>
      {settings?.main_background_image && <S.Layer />}
      <S.Content>
        <S.TopHeader>
          <S.Title>João Afonso</S.Title>
          <S.OptionsWrapper>
            <Link
              to={{
                pathname: 'projetos',
                state: { projects },
              }}
            >
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
