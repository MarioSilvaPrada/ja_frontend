import React, { FC, useEffect, useState } from 'react';
import Layout from 'components/Layout';

import { Link } from 'react-router-dom';
import social from 'utils/social';
import { getSettings, getProjects } from 'api';
import * as S from './style';

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
      <Layout state={{ projects }}>
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
