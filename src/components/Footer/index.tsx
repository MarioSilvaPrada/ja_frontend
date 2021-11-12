import React, { FC } from 'react';
import social from 'utils/social';
import { ISettings } from 'utils/interfaces';

import { useLocation } from 'react-router-dom';

import * as S from './style';

interface IFooter {
  settings: ISettings;
}

const Footer: FC<IFooter> = ({ settings }) => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <S.FooterContainer>
      <S.Wrapper>
        {!isHomePage && (
          <S.ParagraphWrapper>
            <S.Title>Contactos</S.Title>
            <S.ContactWrapper>
              <S.Paragraph>{settings?.admin_email}</S.Paragraph>
              <S.DotWrapper>•</S.DotWrapper>
              <S.Paragraph>
                (+351)
                {settings?.admin_phone_number}
              </S.Paragraph>
            </S.ContactWrapper>
            <S.Paragraph>{settings?.admin_address}</S.Paragraph>
          </S.ParagraphWrapper>
        )}
        <S.SocialWrapper isHomePage={isHomePage}>
          {social.map(({ Icon, url }) => (
            <S.SocialLink href={url} key={url} target="blank">
              {Icon()}
            </S.SocialLink>
          ))}
        </S.SocialWrapper>
        {!isHomePage && (
          <S.Copy>
            © {new Date().getFullYear()} {settings?.admin_name}, all rights
            reserved
          </S.Copy>
        )}
      </S.Wrapper>
    </S.FooterContainer>
  );
};

export default Footer;
