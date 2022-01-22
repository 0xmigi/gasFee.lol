import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import _ from 'lodash';


import { Link } from 'react-router-dom';
import { WalletConnectButton } from '../Connections/Button';
// import { NETWORKS } from 'react-router-dom';
import './nav.css';
import '../App/App.css';
import { ethers } from 'ethers';
import { walletlink } from '../Connections/Button';
import { useChain } from "react-moralis";
import { ALGO_ICON, ARBI_ICON, ARROW_ICON, ATOM_ICON, AURORA_ICON, AVAX_ICON, BONIFIDA_ICON, BSC_ICON, CBW_ICON, CELO_ICON, CLOVER_ICON, COG_ICON, COIN98_ICON, COSMOST_ICON, DOT_ICON, ETH_ICON, FTM_ICON, GNOSIS_ICON, KEPLR_ICON, LUNA_ICON, MATIC_ICON, MM_ICON, MOVR_ICON, ONE_ICON, OP_ICON, PHANTOM_ICON, RABBY_ICON, SOL_ICON, TSTATION_ICON, WAVE_ICON, WC_ICON, XDEFI_ICON } from '../App/constants';



export default function Nav(props) {


  
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const [newChain, setNewChain] = useState();
  const [chainName, setChainName] = useState();
  const [errorMessage, setErrorMessage] = useState("MetaMask");
  const [defaultAccount, setDefaultAccount] = useState("MetaMask");
  const [errorMessageR, setErrorMessageR] = useState("Rabby");
  const [defaultAccountR, setDefaultAccountR] = useState("Rabby");
  const [errorMessageXd, setErrorMessageXd] = useState("xDefi");
  const [defaultAccountXd, setDefaultAccountXd] = useState("xDefi");
  const [userBalance, setUserBalance] = useState(null);

  let activeChain = useRef();
  let newAddress;


const chainSwitchEth = () => (
    <Link to="/ethereum">
            <button
              onClick={() => setNewChain("0x1")}
              className="nav-cta-button mint-button"
              >
                Ethereum
            </button>
    </Link>
);

const chainSwitchBsc = () => (
        <Link to="/binance">
          <button
            onClick={() => setNewChain("0x38")}

            className="nav-cta-button mint-button"
            >
               BSC
          </button>
        </Link>
);

const chainSwitchXdai = () => (
        <Link to="/xdai">
          <button
            onClick={() => setNewChain("0x64")}
            className="nav-cta-button mint-button"
            >
               Gnosis
          </button>
        </Link>
);

const chainSwitchMatic = () => (
        <Link to="/polygon">
          <button
            onClick={() => setNewChain("0x89")}
            className="nav-cta-button mint-button"
            >
               Polygon
          </button>
        </Link>
);

const chainSwitchFtm = () => (
        <Link to="/fantom">
          <button
            onClick={() => setNewChain("0xfa")}
            className="nav-cta-button mint-button"
            >
               Fantom
          </button>
        </Link>
);

const chainSwitchOne = () => (
        <Link to="/harmony">
          <button
            onClick={() => setNewChain("0x63564c40")}
            className="nav-cta-button mint-button"
            >
               Harmony One
          </button>
        </Link>
);

const chainSwitchAvax = () => (
        <Link to="/avalanche">
          <button
            onClick={() => setNewChain("0xa86a")}
            className="nav-cta-button mint-button"
            >
               Avalanche
          </button>
        </Link>
);

const chainSwitchCelo = () => (
        <Link to="/celo">
          <button
            onClick={() => setNewChain("0x4ec")}
            className="nav-cta-button mint-button"
            >
               Celo
          </button>
        </Link>
);

const chainSwitchOp = () => (
        <Link to="/optimism">
          <button
            onClick={() => setNewChain("0xa")}
            className="nav-cta-button mint-button"
            >
               Optimism
          </button>
        </Link>
);

const chainSwitchAda = () => (
        <Link to="/cardano">
          <button
            className="nav-cta-button mint-button"
            >
               Cardano
          </button>
        </Link>
);

const chainSwitchDot = () => (
        <Link to="/polkadot">
          <button
            className="nav-cta-button mint-button"
            >
               Polkadot
          </button>
        </Link>
);

const chainSwitchAtom = () => (
        <Link to="/cosmos">
          <button
            className="nav-cta-button mint-button"
            >
               Cosmos
          </button>
        </Link>
);

const chainSwitchWaves = () => (
        <Link to="/waves">
          <button
            className="nav-cta-button mint-button"
            >
               Waves
          </button>
        </Link>
);

const chainSwitchLuna = () => (
        <Link to="/terra">
          <button
            className="nav-cta-button mint-button"
            >
               Terra
          </button>
        </Link>
);

const chainSwitchAlgo = () => {
  return(
    <Link to="/algo">
          <button
            
            className="nav-cta-button mint-button"
            >
               Algorand
          </button>
    </Link>
    );
};

const chainSwitchArbi = () => (
        <Link to="/arbitrum">
          <button
            onClick={() => setNewChain("0xa4b1")}
            className="nav-cta-button mint-button"
            >
               Arbitrum
          </button>
        </Link>
);

const chainSwitchMovr = () => (
  <Link to="/moonriver">
    <button
      onClick={() => setNewChain("0x505")}
      className="nav-cta-button mint-button"
      >
         Moonriver
    </button>
  </Link>
);

const chainSwitchAurora = () => (
  <Link to="/aurora">
    <button
      onClick={() => setNewChain("0x4e45152")}
      className="nav-cta-button mint-button"
      >
         Aurora
    </button>
  </Link>
);

const chainSwitchSol = () => (
        <Link to="/solana">
          <button
            className="nav-cta-button mint-button"
            >
               Solana
          </button>
        </Link>
);


  //Injected browser wallet connections EVM chains   <<------------------------------------------------------------->>

  console.log(newChain);

  const Chains = () => {
    const { chainId, chain } = useChain();
   
    return() => {

      try {
        if (typeof window.ethereum !== undefined && window.ethereum !== "") {
          window.ethereum.request({method: 'eth_requestAccounts'})

          if (typeof window.ethereum !== newChain && window.ethereum !== "") {
            window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: newChain }],
            })
            .then(window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
              accountChangedHandler(result[0]);
            }));
          } else {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
              accountChangedHandler(result[0]);
          })};
          const accountChangedHandler =  async (newAccount) => {
            setDefaultAccount(newAccount);
            setDefaultAccountR(newAccount);
            setDefaultAccountXd(newAccount);
            
            
            console.log(newAccount);

            newAddress = newAccount      
            activeChain = newChain;
            props.setRecentAccount({ activeChain, newAddress });
      
            console.log(chainId);
          }
        } else {

        }
      
      } catch (e) {
        setErrorMessage('Install MetatMask');
        setErrorMessageR('Install Rabby');
        setErrorMessageXd('Install xDefi');
        console.log(e.message);
      }
    }
  }



  // Solana wallet connection <<------------------------------------------------------------->>
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');

          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );


          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.log(error);
    }
  };


  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };


  
 


//wallet connections <<------------------------------------------------------------->>

const metaMaskConnect = () => {
  return (
    <button
      onClick={Chains()} 
      className="address-display"
      >
        {window.ethereum ? _.truncate(defaultAccount, { 'length': 15 }) : errorMessage}
    </button>
  );
};

const walletConnect = () => (
  <button
    // onClick={connectWalletHandler}
    className="address-display"
    >
      WalletConnect
  </button>
);

const coinBaseConnect = () => (
    <button
      // onClick={Chains()}
      className="address-display"
      >
        CoinBase
    </button>
);

const rabbyConnect = () => (
  <button
    onClick={Chains()} 
    className="address-display"
    >
      {window.ethereum ? _.truncate(defaultAccountR, { 'length': 15 }) : errorMessageR} 
  </button>
);

const xdefiConnect = () => (
  <button
    onClick={Chains()} 
    className="address-display"
    >
      {window.ethereum ? defaultAccountXd : <p >{errorMessageXd}</p>} 
  </button>
);

const terraStConnect = () => (
  <button
    onClick={Chains()} 
    className="address-display"
    >
      Terra Station 
  </button>
);

const cloverConnect = () => (
  <button
    className="address-display"
    >
      Clover
  </button>
);

const keplrConnect = () => (
  <button
    // onClick={Chains()}
    className="address-display"
    >
      Keplr 
  </button>
);

const cosmoStConnect = () => (
  <button
    // onClick={Chains()}
    className="address-display"
    >
      Cosmostation 
  </button>
);

const coin98Connect = () => (
  <button
    // onClick={Chains()}
    className="address-display"
    >
      Coin98
  </button>
);

const phantomConnect = () => (
      <button
         onClick={connectWallet}
         className="address-display"
      > 
           Phantom
      </button>

);



const PasteAddressConnect = () => {
  const [inputAddress, setInputAddress] = useState("paste address");
  let newValue;

  let displayAddress = (event) => {
    newValue = event.target.value;
    console.log(event.target.value);
  };

  let saveAddress = () => {
    setInputAddress(newValue)

    
    activeChain = newChain;
    newAddress = newValue;
    props.setRecentAccount({ activeChain, newAddress });
  }


  return (
    <div className="type-address">
      <input
        className="paste-bar"
        type="text"
        placeholder={inputAddress}
        onChange={displayAddress}
        />
        <button
        className="submit-button" 
        onClick={saveAddress}
        >
          +
      </button>
    </div>
  );
};



  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <div href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button-chain">{props.leftIcon}</span>
        {props.children}
        
      </div>
    );
  }


  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon={<ETH_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchEth()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BSC_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchBsc()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<MATIC_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchMatic()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<OP_ICON/>}
            goToMenu="Optimism"
            >
            <h2>{chainSwitchOp()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<ARBI_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchArbi()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<GNOSIS_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchXdai()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<AVAX_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchAvax()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<FTM_ICON/>}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchFtm()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<CELO_ICON/>}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchCelo()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<ONE_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchOne()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<MOVR_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchMovr()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<AURORA_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchAurora()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<ATOM_ICON />}
            goToMenu="Cosmos"
            >
            <h2>{chainSwitchAtom()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<SOL_ICON/>}
            goToMenu="Solana"
            >
            <h2>{chainSwitchSol()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<LUNA_ICON />}
            goToMenu="Terra"
            >
            <h2>{chainSwitchLuna()}</h2>
          </DropdownItem>
          {/* <DropdownItem
            leftIcon={<ADA_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchAda()}</h2>
          </DropdownItem> */}
          <DropdownItem
            leftIcon={<DOT_ICON />}
            goToMenu="Polkadot"
            >
            <h2>{chainSwitchDot()}</h2>
          </DropdownItem>
          {/* <DropdownItem
            leftIcon={<WAVE_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchWaves()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<ALGO_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchAlgo()}</h2>
          </DropdownItem> */}


          <DropdownItem
            leftIcon={<COG_ICON />}
            goToMenu="evmChains" 
            >
              <h3>Settings</h3>
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'evmChains'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ARROW_ICON />}>
              <h3>chains</h3>
          </DropdownItem>
          <DropdownItem leftIcon={<MM_ICON/>} >{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WC_ICON />}>{<WalletConnectButton />}</DropdownItem>
          <DropdownItem leftIcon={<CBW_ICON/>}>{coinBaseConnect()}</DropdownItem>
          <DropdownItem leftIcon={<RABBY_ICON />}>{rabbyConnect()}</DropdownItem>
          <DropdownItem >{PasteAddressConnect()}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Optimism'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ARROW_ICON />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<MM_ICON/>}>{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WC_ICON />}>{<WalletConnectButton />}</DropdownItem>
          <DropdownItem leftIcon={<CBW_ICON />}>{coinBaseConnect()}</DropdownItem>
          <DropdownItem leftIcon={<RABBY_ICON />}>{rabbyConnect()}</DropdownItem>
          <DropdownItem >{PasteAddressConnect()}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Solana'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ARROW_ICON />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<PHANTOM_ICON />}>{!walletAddress && phantomConnect()}</DropdownItem>
          <DropdownItem leftIcon={<BONIFIDA_ICON />}>{chainSwitchBsc()}</DropdownItem>
          <DropdownItem >{PasteAddressConnect()}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Terra'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ARROW_ICON />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<TSTATION_ICON />}>{terraStConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WC_ICON/>}>{<WalletConnectButton />}</DropdownItem>
          <DropdownItem leftIcon={<XDEFI_ICON/>}>{xdefiConnect()}</DropdownItem>
          <DropdownItem >{PasteAddressConnect()}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Cosmos'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ARROW_ICON />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<KEPLR_ICON />}>{keplrConnect()}</DropdownItem>
          <DropdownItem leftIcon={<COSMOST_ICON />}>{cosmoStConnect()}</DropdownItem>
          <DropdownItem leftIcon={<COIN98_ICON />}>{coin98Connect()}</DropdownItem>
          <DropdownItem >{PasteAddressConnect()}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Polkadot'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ARROW_ICON />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<MM_ICON />}>{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WC_ICON />}>{<WalletConnectButton />}</DropdownItem>
          <DropdownItem leftIcon={<CBW_ICON />}>{coinBaseConnect()}</DropdownItem>
          <DropdownItem leftIcon={<CLOVER_ICON />}>{cloverConnect()}</DropdownItem>
          <DropdownItem >{PasteAddressConnect()}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'otherChains'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ARROW_ICON />}>
            <h2>Other Chains</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<WC_ICON />}>{<WalletConnectButton />}</DropdownItem>
          
        </div>
      </CSSTransition>
    </div>
  );
}
