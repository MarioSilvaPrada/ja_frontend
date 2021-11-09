import React, { FC } from 'react';
import * as S from './style';
import Layout from 'components/Layout';

const PageNotFound: FC = () => (
  <Layout>
    <S.Wrapper>
      <h1>Page not found</h1>
    </S.Wrapper>
  </Layout>
);

export default PageNotFound;
