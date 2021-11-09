import React from 'react';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';

import { RiLinkedinFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { CgFacebook } from 'react-icons/cg';

const social = [
  {
    Icon: (color = 'black') => <IoLogoInstagram color={color} />,
    url: 'https://www.instagram.com/',
  },
  {
    Icon: (color = 'black') => <CgFacebook color={color} />,
    url: 'https://www.facebook.com/',
  },
  {
    Icon: (color = 'black') => <RiLinkedinFill color={color} />,
    url: 'https://www.linkedin.com/',
  },
];

export default social;
