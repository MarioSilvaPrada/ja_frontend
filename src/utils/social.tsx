import React from 'react';

import { RiLinkedinFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { CgFacebook } from 'react-icons/cg';

type SocialType = {
  Icon: () => JSX.Element;
  name: 'instagram' | 'facebook' | 'linkedin';
};

const social: SocialType[] = [
  {
    Icon: (color = 'black') => <IoLogoInstagram color={color} />,
    name: 'instagram',
  },
  {
    Icon: (color = 'black') => <CgFacebook color={color} />,
    name: 'facebook',
  },
  {
    Icon: (color = 'black') => <RiLinkedinFill color={color} />,
    name: 'linkedin',
  },
];

export default social;
