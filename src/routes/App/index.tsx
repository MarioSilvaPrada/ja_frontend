import React, {FC} from 'react';
import * as S from './style';

import {Link} from 'react-router-dom';

const App: FC = () => (
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
    </S.Content>
  </S.Container>
);

export default App;
