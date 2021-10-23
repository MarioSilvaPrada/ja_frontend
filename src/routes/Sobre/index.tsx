import React, { FC, useEffect, useState } from 'react';
import Layout from 'components/Layout';
import { ISettings } from 'utils/interfaces';
import social from 'utils/social';
import { getPartners, getSettings } from 'api';

import getTextParagraphs from 'utils/textParagraph';

import * as S from './style';

interface IProps {
  settings: ISettings;
}

const Sobre: FC<IProps> = ({ settings }) => {
  const [partners, setPartners] = useState([]);
  const [userSettings, setUserSettings] = useState<ISettings | null>(null);

  const getUserSettings = async () => {
    const res = await getSettings();
    setUserSettings(res);
  };

  useEffect(() => {
    const getAllPartners = async () => {
      const res = await getPartners();
      if (res) {
        setPartners(res);
      }
    };

    if (settings) {
      setUserSettings(settings);
    } else {
      getUserSettings();
    }

    getAllPartners();
  }, []);

  return (
    <Layout>
      <S.Wrapper>
        <S.Section>
          {userSettings?.description && (
            <S.AboutWrapper>
              {getTextParagraphs(userSettings.description, S.AboutParagraph)}
            </S.AboutWrapper>
          )}
          {partners.length > 0 && (
            <>
              <S.Title>Parceiros:</S.Title>
              <S.PartnersWrapper>
                {partners.map((partner) => (
                  <S.PartnerLink
                    href={partner.url}
                    key={partner.name}
                    target="blank"
                  >
                    <p>{partner.name}</p>
                  </S.PartnerLink>
                ))}
              </S.PartnersWrapper>
            </>
          )}
          <S.Paragraph>{userSettings?.admin_name}</S.Paragraph>
          <S.Paragraph>{userSettings?.admin_email}</S.Paragraph>
          <S.Paragraph>
            (+351)
            {userSettings?.admin_phone_number}
          </S.Paragraph>
          <S.Paragraph>{userSettings?.admin_address}</S.Paragraph>
          {social.map(({ Icon, url }) => (
            <S.SocialLink href={url} key={url} target="blank">
              {Icon('black')}
            </S.SocialLink>
          ))}
        </S.Section>
        <S.Copy>
          © {new Date().getFullYear()}
          {userSettings?.admin_name}, all rights reserved
        </S.Copy>
      </S.Wrapper>
    </Layout>
  );
};

export default Sobre;
