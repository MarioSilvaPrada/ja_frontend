import React, { FC } from 'react';
import social from 'utils/social';
import { ISettings } from 'utils/interfaces';
import translation from '../../../translations/en_pt.js';

import { useLocation } from 'react-router-dom';

import * as S from './style';

interface IFooter {
  settings: ISettings;
  isEN: boolean;
}

const Footer: FC<IFooter> = ({ settings, isEN }) => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <S.FooterContainer>
      <S.Wrapper>
        {!isHomePage && (
          <S.ParagraphWrapper>
            <S.Title>{translation[isEN ? 'EN' : 'PT'].FOOTER.CONTACTS}</S.Title>
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
          {social.map(({ Icon, name, link }) => (
            <S.SocialLink href={link} key={name} target="blank">
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
