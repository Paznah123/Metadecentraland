import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import { createGlobalStyle } from 'styled-components';

import LandProvider from './store/Land/LandProvider';
import CryptoProvider from './store/Crypto/CryptoProvider';

import App from './App';

import { uiColors } from './constants/Colors';

// ============================================================

const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
      user-select: none;
   }
   
   body {
      margin: 0;
      background-color: ${uiColors.quaternary};
      font-family: 'Poppins', sans-serif;
   }

   body::-webkit-scrollbar {
      display: none;
   }
`;

// ============================================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
        <LandProvider>
            <CryptoProvider>
                <GlobalStyle/>
                <App />
            </CryptoProvider>
        </LandProvider>
   </React.StrictMode>
);

// ============================================================
