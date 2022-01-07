import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
// import { Web3ReactProvider } from '@web3-react/core';
// import { Web3Provider } from '@ethersproject/providers';

// const getLibrary = provider => new Web3Provider(provider);
{/* <Web3Provider getLibrary={getLibrary}> */}


const moralisAppId = "vPt2n1IsrYwsq9depxVfMvSwmVwniPnMGGoy49Co";
const moralisServerURL = "https://dcsdixcbd1kw.usemoralis.com:2053/server";


ReactDOM.render(
  <BrowserRouter>
        <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL} >
          <App />
        </MoralisProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

