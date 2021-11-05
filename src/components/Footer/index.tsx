import React, { FC } from 'react';
import social from 'utils/social';

import * as S from './style';

const Footer: FC = () => {
  return (
    <S.SocialWrapper>
      {social.map(({ Icon, url }) => (
        <S.SocialLink href={url} key={url} target="blank">
          {Icon()}
        </S.SocialLink>
      ))}
    </S.SocialWrapper>
  );
};

export default Footer;
