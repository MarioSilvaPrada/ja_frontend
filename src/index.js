import React from 'react';
import { render } from 'react-dom';
/*eslint-disable */
import regeneratorRuntime from 'regenerator-runtime'; //to use async await
import './index.css';

import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

import Navigation from './navigation';

const rootElement = document.getElementById('root');

const root = (
  <ThemeProvider theme={theme}>
    <Navigation />
  </ThemeProvider>
);

render(root, rootElement);
