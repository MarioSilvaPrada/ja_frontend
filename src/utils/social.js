import React from 'react';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';

import { RiLinkedinFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { CgFacebook } from 'react-icons/cg';

const social = [
  {
    Icon: (color = 'black') => <IoLogoInstagram color={color} />,
    url: 'https://www.instagram.com/_ja.architecture_/',
  },
  {
    Icon: (color = 'black') => <CgFacebook color={color} />,
    url: 'https://www.facebook.com/JA-Architecture-106707695213271',
  },
  {
    Icon: (color = 'black') => <RiLinkedinFill color={color} />,
    url: 'https://www.linkedin.com/company/ja-architecture-office/about/?viewAsMember=true',
  },
];

export default social;
