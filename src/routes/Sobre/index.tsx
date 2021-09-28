import React, { FC } from 'react';
import * as S from './style';
import Layout from 'components/Layout';

const Page2: FC = ({ location }) => (
  <Layout>
    {console.log({ sobre: location })}
    <S.Title>Page 2</S.Title>
  </Layout>
);

export default Page2;
