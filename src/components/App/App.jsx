import React, { useCallback, useState, useEffect, useRef } from 'react';
import  Nav, { StartKitchen }  from '../Nav/Nav';
import './App.css';

import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
import { ReactComponent as McPepeIcon } from '../../assets/icons/mcPepeSmol.svg';
import mcPepe from '../../assets/icons/mcPepeSmol.png';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';



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
      return (
        <div className="plus-ultra">
          <div className="plus-ultra-panel">
            <p className="plus-ultra-text">+Ultra NFTs coming soon, a generative svg NFT based on your unfortunate transaction history, served fresh on Optimism or Polygon</p>
          <img src={mcPepe} alt="McPepe"/>
          <div className="sub-ultra-text">meanwhile, support the chefs down at McPepe's kitchen, anon:<br/> any EVM chain<p className="plus-ultra-text">0x2b3Ca2178e0dF323f413a8402eEF04Df8E5b8e3C</p></div>
          </div>
        </div>
      );
  }

  let domNode = useClickOutside(() => {
    setOpen(false)
    setOpenNft(false)
  })
  
  const [recentAccount, setRecentAccount] = useState({});
  const [cookingStatus, setCookingStatus] = useState({});


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
      {/* {cookingStatus} */}
         <main className="content">
             <Main recentAccount={recentAccount}
                  //  setCookingStatus={setCookingStatus} 
                   />
         </main>
         <Footer />
    </div>
   </div>
  );
}

