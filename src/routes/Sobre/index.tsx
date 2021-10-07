import React, { FC } from 'react';
import Layout from 'components/Layout';
import { ISettings } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  settings: ISettings;
}

const Sobre: FC<IProps> = ({ settings }) => (
  <Layout>
    <>
      <S.Paragraph>{settings.admin_name}</S.Paragraph>
      <S.Paragraph>{settings.admin_email}</S.Paragraph>
      <S.Paragraph>{settings.admin_phone_number}</S.Paragraph>
      <S.Paragraph>{settings.admin_address}</S.Paragraph>
    </>
  </Layout>
);

export default Sobre;
