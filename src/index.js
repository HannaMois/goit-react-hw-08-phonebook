import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';
import './index.css';

const theme = {
  colors: {
    mainColorText: 'rgb(46, 34, 2)',
    whiteColor: '#fff',
    secondColor: '#52acff',
    bgColorMain: 'rgb(237, 248, 250)',
  },
  fontSizes: {
    m: '40px',
    l: '30px',
    s: '20px',
    xs: '16px',
  },

  space: {
    l: '20px',
    m: '10px',
    s: '5px',
    xs: '0',
  },
  fontWeights: {
    b: '700',
    l: '600',
    m: '500',
    s: '400',
  },
  radii: {
    radius: '5px',
  },
  sizes: {
    l: '340px',
    m: '300px',
    xl: '500px',
  },
  borderWidths: {
    w: '1px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
