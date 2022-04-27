import React, { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';
import _ from 'lodash';
import ReactGA from 'react-ga';

import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
import { ReactComponent as McPepeIcon } from '../../assets/icons/mcPepeSmol.svg';
import mcPepe from '../../assets/icons/mcPepeSmol.png';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';



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


export default function App(props) {
  // Constants
  const name = 'gasFees';
  const [open, setOpen] = useState(false);
  const [openNft, setOpenNft] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_CODE);

    ReactGA.pageview(window.location.pathname)
    console.log("google analytics should have told me a visit occured", process.env.REACT_APP_TRACKING_CODE);
  }, [])
 

  function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }
  
  function NavItemChains(props) {
    return (
      recentAccount.displayAccount === undefined ?
        <li ref={domNode} className="nav-item">
          <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
          </a>
          {open && props.children}
        </li>
      :
        <li ref={domNode} className="nav-item-nft">
          <a href="#" className="icon-button-nft" onClick={() => setOpen(!open)}>
            {_.truncate(recentAccount.displayAccount, { 'length': 16 })}
          </a>
          {open && props.children}
        </li>
    );
  }

  function NavItemNfts(props) {
    return (
      recentAccount.displayAccount === undefined ?
        <li ref={domNode} className="nav-item-nft">
          <a href="#" className="icon-button-nft" onClick={() => setOpenNft(!openNft)}>
            {props.icon}
          </a>
          {openNft && PlusUltraDropdown()}
        </li>
      :
        <li ref={domNode} className="nav-item-nft">
          <a href="#" className="icon-button" onClick={() => setOpenNft(!openNft)}>
            {<div className="connected-icon-nft">+</div>}
          </a>
          {openNft && PlusUltraDropdown()}
        </li>
    );
  }

  const PlusUltraDropdown = (props) => {
      return (
        <div className="plus-ultra">
          <div className="plus-ultra-panel">
            <p className="plus-ultra-text">+Ultra NFTs coming soon, a generative svg NFT based on your unfortunate transaction history, served fresh on Optimism or Polygon</p>
            <div className="small-pepe">
              <img src={mcPepe} alt="McPepe"/>
            </div>
          </div>
        </div>
      );
  }

  let domNode = useClickOutside(() => {
    setOpen(false)
    setOpenNft(false)
  })
  
  const [recentAccount, setRecentAccount] = useState({});
  let displayAddress;
  useEffect(() => {
    displayAddress = recentAccount.newAddress;
    console.log("display address is ", displayAddress);
  }, [recentAccount])


  return (
   <div >
     <Navbar >
      <Header icon={<McPepeIcon/>} domain={name} />
      <div className="nav-item-nft">
        <NavItemNfts icon={<div>+Ultra</div>}></NavItemNfts>
        <NavItemChains icon={<CaretIcon />} >
          <Nav setRecentAccount={setRecentAccount} />
        </NavItemChains>
      </div>
    </Navbar>

    <div className="App"> 
         <main className="content">
             <Main recentAccount={recentAccount}
                   />
         </main>
         <Footer />
    </div>
   </div>
  );
}

