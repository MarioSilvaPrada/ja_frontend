import React, { FC, useEffect, useState } from 'react';
import Layout from 'components/Layout';
import { ISettings } from 'utils/interfaces';
import { getPartners, getSettings } from 'api';
import DescriptionText from 'components/DescriptionText';
import { Wrapper } from 'components/DescriptionText/style';

import getTextParagraphs from 'utils/textParagraph';

import * as S from './style';
import { Spacer } from 'components/Spacer';

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
          <S.AboutImg src={userSettings?.about_me_image} />
          {userSettings?.description && userSettings?.description_en && (
            <S.AboutWrapper>
              <Wrapper>
                {getTextParagraphs(
                  userSettings.description_en,
                  DescriptionText
                )}
                <Spacer />
                {getTextParagraphs(userSettings.description, DescriptionText, {
                  isPT: true,
                })}
              </Wrapper>
            </S.AboutWrapper>
          )}
          {partners.length > 0 && (
            <>
              <S.Title>Partners</S.Title>
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
          {userSettings?.company_file && (
            <S.StyledLink href={userSettings?.company_file} target="blank">
              Our portfolio
            </S.StyledLink>
          )}
        </S.Section>
      </S.Wrapper>
    </Layout>
  );
};

export default Sobre;
