import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from 'react-icons/ai';

const social = [
  {
    Icon: (color = 'black') => <AiOutlineInstagram color={color} />,
    url: 'https://www.instagram.com/',
  },
  {
    Icon: (color = 'black') => <AiOutlineLinkedin color={color} />,
    url: 'https://www.linkedin.com/',
  },
  {
    Icon: (color = 'black') => <AiOutlineFacebook color={color} />,
    url: 'https://www.facebook.com/',
  },
];

export default social;
