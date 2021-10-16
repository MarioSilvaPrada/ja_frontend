import React, { FC } from 'react';
import Layout from 'components/Layout';
import { ISettings } from 'utils/interfaces';
import social from 'utils/social';
import * as S from './style';

interface IProps {
  settings: ISettings;
}

const Sobre: FC<IProps> = ({ settings }) => (
  <Layout>
    <S.Wrapper>
      <div>
        <S.Paragraph>{settings.admin_name}</S.Paragraph>
        <S.Paragraph>{settings.admin_email}</S.Paragraph>
        <S.Paragraph>(+351) {settings.admin_phone_number}</S.Paragraph>
        <S.Paragraph>{settings.admin_address}</S.Paragraph>
        {social.map(({ Icon, url }) => (
          <S.SocialLink href={url} key={url} target="blank">
            {Icon('black')}
          </S.SocialLink>
        ))}
      </div>
      <S.Copy>
        © {new Date().getFullYear()} {settings.admin_name}, all rights reserved
      </S.Copy>
    </S.Wrapper>
  </Layout>
);

export default Sobre;
