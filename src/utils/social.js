import React from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const social = [
  {
    Icon: (color = 'white') => <AiOutlineInstagram color={color} />,
    url: 'https://www.instagram.com/',
  },
  {
    Icon: (color = 'white') => <AiOutlineLinkedin color={color} />,
    url: 'https://www.linkedin.com/',
  },
];

export default social;
