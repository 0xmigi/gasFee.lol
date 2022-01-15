import React, { useCallback, useState, useEffect, useRef } from 'react';
import  Nav  from '../Nav/Nav';
import './App.css';

import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
import { ReactComponent as McPepeIcon } from '../../assets/icons/mcPepeSmol.svg';
import { ReactComponent as ZapIcon } from '../../assets/icons/powered_by_zap_purple.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import githubLogo from '../../assets/github-mark.svg';
import mcPepe from '../../assets/icons/mcPepeSmol.png';
import Header from '../Header/Header';
import Main from '../Main/Main';



let useClickOutside = (handler) => {
  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current&&!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler)
    }
  });

  return domNode
};

// const web3Modal = Web3ModalSetup();



export default function App(props) {
  // Constants


  const TWITTER_LINK = `https://twitter.com/0xmigi`;
  const GITHUB_LINK = `https://github.com/0xmigi`;

  const name = 'gasFees';
  const [open, setOpen] = useState(false);
  const [openNft, setOpenNft] = useState(false);
 

  function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }
  
  function NavItemChains(props) {
    return (
      <li ref={domNode} className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    );
  }

  function NavItemNfts(props) {
    return (
      <li ref={domNode} className="nav-item-nft">
        <a href="#" className="icon-button-nft" onClick={() => setOpenNft(!openNft)}>
          {props.icon}
        </a>
        {openNft && PlusUltraDropdown()}
      </li>
    );
  }

  const PlusUltraDropdown = (props) => {
      const [inputAddress, setInputAddress] = useState("paste");
    
      let displayAddress = (event) => {
        const newValue = event.target.value;
        setInputAddress(newValue)
      };
    
      return (
        <div className="plus-ultra">
          <div className="plus-ultra-panel">
            <p className="plus-ultra-text">+Ultra NFTs coming soon, a generative svg NFT based on your unfortunate transaction history served fresh on Optimism or Polygon</p>
          <img src={mcPepe} alt="McPepe"/>
          <p className="sub-ultra-text">meanwhile show McPepe your support: 0x2b3Ca2178e0dF323f413a8402eEF04Df8E5b8e3C  <br></br>any EVM chain</p>
          </div>
        </div>
      );
  }

  let domNode = useClickOutside(() => {
    setOpen(false)
    setOpenNft(false)
  })
  
  const [recentAccount, setRecentAccount] = useState({});


  return (
   <div >
     <Navbar >
      <Header icon={<McPepeIcon/>} domain={name} />
      <NavItemNfts icon={<div>+Ultra</div>}></NavItemNfts>
      <NavItemChains icon={<CaretIcon />}>
        <Nav setRecentAccount={setRecentAccount} />
      </NavItemChains>
    </Navbar>

    <div className="App"> 
         <main className="content">
             <Main recentAccount={recentAccount} />
         </main>
         <div className="footer-container">
              <div
               className="footer-text"
               href={GITHUB_LINK}
               target={githubLogo}
               rel="noreferrer"
               >{<img alt="Github Logo" className="github-logo" src={githubLogo} />}</div>
              <div
               className="footer-text"
               href={TWITTER_LINK}
               target={twitterLogo}
               rel="noreferrer"
               >{<img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />}</div>
           </div>
    </div>
   </div>
  );
}

