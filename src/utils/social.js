import React from 'react';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';

const social = [
  {
    Icon: (color = 'black') => <FiInstagram color={color} />,
    url: 'https://www.instagram.com/',
  },
  {
    Icon: (color = 'black') => <FiFacebook color={color} />,
    url: 'https://www.facebook.com/',
  },
  {
    Icon: (color = 'black') => <FiLinkedin color={color} />,
    url: 'https://www.linkedin.com/',
  },
];

export default social;
