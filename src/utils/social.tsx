import React from 'react';

import { RiLinkedinFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { CgFacebook } from 'react-icons/cg';

type SocialType = {
  Icon: () => JSX.Element;
  name: 'instagram' | 'facebook' | 'linkedin';
  link: string;
};

const social: SocialType[] = [
  {
    Icon: (color = 'black') => <IoLogoInstagram color={color} />,
    name: 'instagram',
    link: 'https://www.instagram.com/mtd.metodo/',
  },
  {
    Icon: (color = 'black') => <CgFacebook color={color} />,
    name: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100076636563450',
  },
  {
    Icon: (color = 'black') => <RiLinkedinFill color={color} />,
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/ja-architecture-office/',
  },
];

export default social;
