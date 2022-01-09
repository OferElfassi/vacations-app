import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

import theme from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
