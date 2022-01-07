import React, { useCallback, useState, useEffect, useRef } from 'react';
import  Nav  from '../Nav/Nav';
import DoughnutChart from '../Charts/DoughnutChart';
import './App.css';

import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
import { ReactComponent as McPepeIcon } from '../../assets/icons/mcPepeSmol.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import githubLogo from '../../assets/github-mark.svg';
import Header from '../Header/Header';
import Main from '../Main/Main';
import mcPepeSmol from '../../assets/icons/mcPepeSmol.png'



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
            <p className="plus-ultra-text">+Ultra NFTs coming soon, a generative NFT based on your unfortunate transaction history</p>
          <input 
             className="paste-bar"
             type="text"
             placeholder={inputAddress}
            //  autoFocus="autoFocus"
            //  value={value}
             onChange={displayAddress}
          />
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
              <a
               className="footer-text"
               href={GITHUB_LINK}
               target={githubLogo}
               rel="noreferrer"
               >{<img alt="Github Logo" className="github-logo" src={githubLogo} />}</a>
              <a
               className="footer-text"
               href={TWITTER_LINK}
               target={twitterLogo}
               rel="noreferrer"
               >{<img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />}</a>
           </div>
    </div>
   </div>
  );
}

