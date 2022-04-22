import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@mui/styles';
import { ModalProvider } from 'react-declarative';

import createCustomTag from "./utils/createCustomTag";

import AlertProvider from './components/AlertProvider';

import THEME_LIGHT from './theme';

import App from './App';

createCustomTag(
  "bgcolor-red",
  "background: rgb(255, 229, 229); color: rgb(255, 0, 0);"
);
createCustomTag(
  "bgcolor-green",
  "background: rgb(240, 246, 236); color: rgb(112, 173, 71);"
);
createCustomTag(
  "text-spacer",
  "display: inline-block; padding: 10px; visibility: hidden;"
);
createCustomTag(
  "text-underline",
  "display: inline-block; text-decoration: underline;"
);

const wrappedApp = (
  <ThemeProvider theme={THEME_LIGHT}>
    <ModalProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </ModalProvider>
  </ThemeProvider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
