import React, { useEffect, useState } from "react";

import { useMoralis } from 'react-moralis';
import { ethers } from 'ethers';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import WalletConnectClient from "@walletconnect/client";
import WalletLink from "walletlink";
import { moralisServerURL } from "../..";
import { INFURA_ID, ALCHEMY_KEY } from "../App/constants";
import '../Nav/nav.css';
import '../App/App.css';


const LogoutButton = () => {
    const { logout, isAuthenticating } = useMoralis();
  
    return (
      <button 
        className="address-display"
        isLoading={isAuthenticating}
        onClick={() => logout()}
        disabled={isAuthenticating}
        >
          Logout
      </button>
    );
  };
    
  // WalletConnect 
export function WalletConnectButton() {
    const {
      authenticate,
      isWeb3Enabled,
      isAuthenticated,
      user,
      enableWeb3,
      Moralis,
    } = useMoralis();
   
   
    const authWalletConnect = async() => {
      const user = authenticate({
        provider: "walletconnect",
        chainId: 56,
        mobileLinks: [
          "rainbow",
          "argent",
          "trust",
          "metamask",
          "imtoken",
          "pillar",
        ],
   
        signingMessage: "Welcome",
      });
      console.log(user);
    };
   
    useEffect(() => {
        
      if (!isWeb3Enabled && isAuthenticated) {
        enableWeb3({ provider: "walletconnect", chainId: 56 });
        console.log("connected to");
      }
    }, [isWeb3Enabled, isAuthenticated, enableWeb3]);
   
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      }
    });

   
    if (!isAuthenticated && !user) {
      // console.log(user);
      return (
        <div>
          <button
            className="address-display"
            onClick={() => authWalletConnect()}>
              WalletConnect
          </button>
        </div>
      )
    };
    return (<LogoutButton />);
   };


// var RPC_URLS = {
//     1: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
//     4: 'https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213'
// };




/// trying to figure out WalletLink

const walletLink = new WalletLink({
    appName: "coinbase",
  });

const walletLinkProvider = walletLink.makeWeb3Provider(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`, 1);


// export const web3ModalSetup = () =>
//   new Web3Modal({
//     network: "mainnet", // Optional. If using WalletConnect on xDai, change network to "xdai" and add RPC info below for xDai chain.
//     cacheProvider: true, // optional
//     providerOptions: {
//       "custom-walletlink": {
//         display: {
//           logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
//           name: "Coinbase",
//           description: "Connect to Coinbase Wallet (not Coinbase App)",
//         },
//         package: walletLinkProvider,
//         connector: async (provider, _options) => {
//           await provider.enable();
//           return provider;
//         },
//       },
//     },
// });

