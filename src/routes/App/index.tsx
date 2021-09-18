import React, { FC, useEffect } from 'react';
import * as S from './style';

import { Link } from 'react-router-dom';
import social from 'utils/social';
import { getSettings } from 'api';

const App: FC = () => {
  useEffect(() => {
    getSettings();
  }, []);
  return (
    <S.Container>
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
