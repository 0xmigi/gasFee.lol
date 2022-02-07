import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import _ from 'lodash';


import { Link } from 'react-router-dom';
import { WalletConnectButton } from '../Connections/Button';
import {
  useMoralis,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from "react-moralis";
import './nav.css';
import '../App/App.css';
import { ConnectType, useWallet } from '@terra-money/wallet-provider'; 
import { ethers } from 'ethers';
import { walletlink } from '../Connections/Button';
import { useChain } from "react-moralis";
import { LIGHTMODE_ICON, ALGO_ICON, ARBI_ICON, ARROW_ICON, ATOM_ICON, AURORA_ICON, AVAX_ICON, BOBA_ICON, BONIFIDA_ICON, BSC_ICON, CBW_ICON, CELO_ICON, CLOVER_ICON, COG_ICON, COIN98_ICON, COSMOST_ICON, CRONOS_ICON, DOT_ICON, ETH_ICON, FTM_ICON, GNOSIS_ICON, GLMR_ICON, HECO_ICON, KEPLR_ICON, LUNA_ICON, MATIC_ICON, METIS_ICON, MM_ICON, MOVR_ICON, OEC_ICON, ONE_ICON, OP_ICON, PHANTOM_ICON, RABBY_ICON, SOL_ICON, TSTATION_ICON, WAVE_ICON, WC_ICON, XDEFI_ICON, COPY_ICON} from '../App/constants';



export default function Nav(props) {

  
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const [newChain, setNewChain] = useState();
  const [color, setColor] = useState('#ffffff');
  const [chainName, setChainName] = useState();
  const [errorMessage, setErrorMessage] = useState("MetaMask");
  const [defaultAccount, setDefaultAccount] = useState("MetaMask");
  const [errorMessageR, setErrorMessageR] = useState("Rabby");
  const [defaultAccountR, setDefaultAccountR] = useState("Rabby");
  const [errorMessageXd, setErrorMessageXd] = useState("xDefi");
  const [defaultAccountXd, setDefaultAccountXd] = useState("xDefi");
  const [userBalance, setUserBalance] = useState(null);
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    supportFeatures,
    connect,
    install,
    disconnect,
  } = useWallet();

  let activeChain = useRef();
  let terraChain = useRef();
  let newAddress;
  let displayAccount;
  let solAccount;
  let terraAccount;
  let chainColor;


const chainSwitchEth = () => (
    <Link to="ethereum">
            <button
              onClick={() => {setNewChain("0x1"); setColor('#582a2a');}}
              className="nav-cta-button mint-button"
              >
                Ethereum
            </button>
    </Link>
);

const chainSwitchBsc = () => (
        <Link to="binance">
          <button
            onClick={() => {setNewChain("0x38"); setColor('#6f3832');}}

            className="nav-cta-button mint-button"
            >
               BSC
          </button>
        </Link>
);

const chainSwitchXdai = () => (
        <Link to="xdai">
          <button
            onClick={() => {setNewChain("0x64"); setColor('#c28147');}}
            className="nav-cta-button mint-button"
            >
               Gnosis
          </button>
        </Link>
);

const chainSwitchMatic = () => (
        <Link to="polygon">
          <button
            onClick={() => {setNewChain("0x89"); setColor('#864838');}}
            className="nav-cta-button mint-button"
            >
               Polygon
          </button>
        </Link>
);

const chainSwitchFtm = () => (
        <Link to="fantom">
          <button
            onClick={() => {setNewChain("0xfa"); setColor('#e1ae51');}}
            className="nav-cta-button mint-button"
            >
               Fantom
          </button>
        </Link>
);

const chainSwitchOne = () => (
        <Link to="harmony">
          <button
            onClick={() => {setNewChain("0x63564c40"); setColor('#f5e061');}}
            className="nav-cta-button mint-button"
            >
               Harmony One
          </button>
        </Link>
);

const chainSwitchAvax = () => (
        <Link to="avalanche">
          <button
            onClick={() => {setNewChain("0xa86a"); setColor('#d3974b');}}
            className="nav-cta-button mint-button"
            >
               Avalanche
          </button>
        </Link>
);

const chainSwitchCelo = () => (
        <Link to="celo">
          <button
            onClick={() => {setNewChain("0xa4ec"); setColor('#ecc758');}}
            className="nav-cta-button mint-button"
            >
               Celo
          </button>
        </Link>
);

const chainSwitchOp = () => (
        <Link to="optimism">
          <button
            onClick={() => {setNewChain("0xa"); setColor('#9b5a3e');}}
            className="nav-cta-button mint-button"
            >
               Optimism
          </button>
        </Link>
);

const chainSwitchAda = () => (
        <Link to="cardano">
          <button
            onClick={() => {setNewChain("ada"); setColor('#273968');}}
            className="nav-cta-button mint-button"
            >
               Cardano
          </button>
        </Link>
);

const chainSwitchDot = () => (
        <Link to="polkadot">
          <button
            onClick={() => {setNewChain("dot"); setColor('#322a58');}}
            className="nav-cta-button mint-button"
            >
               Polkadot
                <div className="soon-width">
                  <div className="soon">
                      soon
                  </div>
                </div>
          </button>
        </Link>
);

const chainSwitchAtom = () => (
        <Link to="cosmos">
          <button
            onClick={() => {setNewChain("cosmos"); setColor('#007d8b');}}
            className="nav-cta-button mint-button"
            >
               Cosmos
               <div className="soon-width">
                  <div className="soon">
                      soon
                  </div>
                </div>
          </button>
        </Link>
);

const chainSwitchWaves = () => (
        <Link to="waves">
          <button
            className="nav-cta-button mint-button"
            >
               Waves
          </button>
        </Link>
);

const chainSwitchLuna = () => (
        <Link to="terra">
          <button
            onClick={() => {setNewChain("terra"); setColor('#273968');}}
            className="nav-cta-button mint-button"
            >
               Terra
               <div className="soon-width">
                  <div className="soon">
                      soon
                  </div>
                </div>
          </button>
        </Link>
);

const chainSwitchAlgo = () => {
  return(
    <Link to="algo">
          <button
            // onClick={() => {setNewChain("0xa4b1"); setColor('#b06d43');}}
            className="nav-cta-button mint-button"
            >
               Algorand
          </button>
    </Link>
    );
};

const chainSwitchArbi = () => (
        <Link to="arbitrum">
          <button
            onClick={() => {setNewChain("0xa4b1"); setColor('#b06d43');}}
            className="nav-cta-button mint-button"
            >
               Arbitrum
          </button>
        </Link>
);

const chainSwitchMetis = () => (
  <Link to="metis">
    <button
      onClick={() => {setNewChain("0x440"); setColor('#64c987');}}
      className="nav-cta-button mint-button"
      >
         Metis
    </button>
  </Link>
);

const chainSwitchMovr = () => (
  <Link to="moonriver">
    <button
      onClick={() => {setNewChain("0x505"); setColor('#fafa6e');}}
      className="nav-cta-button mint-button"
      >
         Moonriver
    </button>
  </Link>
);

const chainSwitchAurora = () => (
  <Link to="aurora">
    <button
      onClick={() => {setNewChain("0x4e45152"); setColor('#aae479');}}
      className="nav-cta-button mint-button"
      >
         Aurora
    </button>
  </Link>
);

const chainSwitchBoba = () => (
  <Link to="boba">
    <button
      onClick={() => {setNewChain("0x120"); setColor('#23aa8f');}}
      className="nav-cta-button mint-button"
      >
         Boba
    </button>
  </Link>
);

const chainSwitchOEC = () => (
  <Link to="OEC">
    <button
      onClick={() => {setNewChain("0x42"); setColor('#00898a');}}
      className="nav-cta-button mint-button"
      >
         OEC
    </button>
  </Link>
);

const chainSwitchGlmr = () => (
  <Link to="glmr">
    <button
      onClick={() => {setNewChain("0x504"); setColor('#00898a');}}
      className="nav-cta-button mint-button"
      >
         Moonbeam
    </button>
  </Link>
);

const chainSwitchHeco = () => (
  <Link to="heco">
    <button
      onClick={() => {setNewChain("0x80"); setColor('#007d8b');}}
      className="nav-cta-button mint-button"
      >
         Heco
    </button>
  </Link>
);

const chainSwitchCronos = () => (
  <Link to="cro">
    <button
      onClick={() => {setNewChain("0x19"); setColor('#006286');}}
      className="nav-cta-button mint-button"
      >
         Cronos
    </button>
  </Link>
);

const chainSwitchSol = () => (
        <Link to="solana">
          <button
            onClick={() => {setNewChain("solana"); setColor('#006286');}}
            className="nav-cta-button mint-button"
            >
               Solana
          </button>
        </Link>
);


  //Injected browser wallet connections EVM chains   <<------------------------------------------------------------->>

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

            newAddress = newAccount;
            displayAccount = newAccount;   
            activeChain = newChain;
            chainColor = color;
            props.setRecentAccount({ activeChain, newAddress, chainColor, displayAccount });
      
            console.log(chainId);
            console.log(chainColor);
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

          const response = await solana.connect({ onlyIfTrusted: true });
          console.log('Connected with Public Key:', response.publicKey.toString());

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
    solAccount = response.publicKey.toString();
    displayAccount = response.publicKey.toString();
    chainColor = color;
    props.setRecentAccount({ solAccount, chainColor, displayAccount })
  }
};

const onConnect = useCallback(() => {
  connect(ConnectType.EXTENSION);
  terraAccount = wallets[0].terraAddress;
  displayAccount = terraAccount;
  terraChain = newChain;
  chainColor = '#273968';
  console.log("color is ", color);

  props.setRecentAccount({ terraAccount, chainColor, displayAccount });
  console.log("connected to terra address", wallets[0].terraAddress);
}, [connect]);
  
 

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
      <div className="soon-width">
        <div className="soon">
            soon
        </div>
      </div>
  </button>
);

const coinBaseConnect = () => (
    <button
      onClick={Chains()}
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
    onClick={onConnect}
    className="address-display"
    >
      Xdefi
      <div className="soon-width">
        <div className="soon">
            soon
        </div>
      </div>
    </button>

  // <button
  //   onClick={Chains()} 
  //   className="address-display"
  //   >
  //     {window.ethereum ? defaultAccountXd : <p >{errorMessageXd}</p>} 
  // </button>
);

const terraStConnect = () => (
  <button
    onClick={onConnect} 
    className="address-display"
    >
      TerraStation 
      <div className="soon-width">
        <div className="soon">
            soon
        </div>
      </div>
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
      <div className="soon-width">
        <div className="soon">
            soon
        </div>
      </div>
  </button>
);

const cosmoStConnect = () => (
  <button
    // onClick={Chains()}
    className="address-display"
    >
      Cosmostation 
      <div className="soon-width">
        <div className="soon">
            soon
        </div>
      </div>
  </button>
);

const coin98Connect = () => (
  <button
    // onClick={Chains()}
    className="address-display"
    >
      Coin98
      <div className="soon-width">
        <div className="soon">
            soon
        </div>
      </div>
  </button>
);

const lightMode = () => (
  <button
    // onClick={Chains()}
    className="address-display"
    >
      Light
      <div className="soon-width">
        <div className="soon">
            soon
        </div>
      </div>
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

const bonifidaConnect = () => (
  <button
     onClick={connectWallet}
     className="address-display"
  > 
       Bonifida
  </button>
);

const [copySuccess, setCopySuccess] = useState(false);

const donateButton = () => {

  return (
    <div className="donate-box">
      <div className="donate-panel">
        donations are appreciated ❤️ any EVM chain
      </div>
      <div className="copy-address">
        {<div>
            <button 
              className="donate-button"
              // onMouseLeave={setCopySuccess(false)}
              onClick={() =>  {
                navigator.clipboard.writeText('0x2b3Ca2178e0dF323f413a8402eEF04Df8E5b8e3C');
                setCopySuccess(true);
              }}
              >
                { copySuccess === true ? '👍' : <COPY_ICON/>}
            </button> 
          </div>
        }
        <div>
          <div
            className="donate-bar"
            >
              {_.truncate('0x2b3Ca2178e0dF323f413a8402eEF04Df8E5b8e3C', { 'length': 30 })}
            </div>
        </div>
      </div>
    </div> 
  );
}

const { web3, enableWeb3, isWeb3Enabled } = useMoralis();
const Web3Api = useMoralisWeb3Api();
const [domainName, setDomainName] = useState("");
const [ensAddress, setEnsAddress] = useState("");

const PasteAddressConnect = () => {
  const [inputAddress, setInputAddress] = useState("address/ENS");
  

  let newValue;

  let displayAddress = (event) => {
    newValue = event.target.value;
    console.log(event.target.value);
  };

  let saveAddress = () => {
    setInputAddress(newValue);
    activeChain = newChain;
    displayAccount = newValue;
    chainColor = color;

    if (_.truncate(newValue, { 'length': 5 }) !== "0x...") {
      web3.eth.ens.getAddress(newValue).then((address) => {
        setEnsAddress(address);

        newAddress = address;
        props.setRecentAccount({ activeChain, newAddress, chainColor, displayAccount });

      });

      if (newChain === "solana") {
        solAccount = newValue;
        chainColor = color;
        props.setRecentAccount({ solAccount, chainColor, displayAccount }) 
      } else if (newChain === "terra") {
        terraAccount = newValue;
        chainColor = color;
        props.setRecentAccount({terraAccount, chainColor, displayAccount})
      }
    } else {
      newAddress = newValue;
      props.setRecentAccount({ activeChain, newAddress, chainColor, displayAccount });
    }  
  }

  useEffect(() => {
    if (!isWeb3Enabled) {
      enableWeb3();
    }
  }, [isWeb3Enabled, enableWeb3]);

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

  function DropdownDonate(props) {
    return (
      <div href="#" className="donate-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </div>
    );
  }


  console.log("color is ", color);


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
            leftIcon={<GLMR_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchGlmr()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<AURORA_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchAurora()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<METIS_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchMetis()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BOBA_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchBoba()}</h2>
          </DropdownItem>
          {/* <DropdownItem
            leftIcon={<OEC_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchOEC()}</h2>
          </DropdownItem> */}
          <DropdownItem
            leftIcon={<HECO_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchHeco()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<CRONOS_ICON />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchCronos()}</h2>
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
            goToMenu="otherChains" 
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
          <DropdownItem leftIcon={<MM_ICON/>}>{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WC_ICON />}>{walletConnect()}</DropdownItem>
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
            <h3>chains</h3>
          </DropdownItem>
          <DropdownItem leftIcon={<MM_ICON/>}>{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WC_ICON />}>{walletConnect()}</DropdownItem>
          <DropdownItem leftIcon={<CBW_ICON />}>{coinBaseConnect()}</DropdownItem>
          <DropdownItem leftIcon={<RABBY_ICON />}>{rabbyConnect()}</DropdownItem>
          <DropdownItem >{PasteAddressConnect()}</DropdownItem>
          {/* <DropdownDonate >{Ens()}</DropdownDonate> */}
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
            <h3>chains</h3>
          </DropdownItem>
          <DropdownItem leftIcon={<PHANTOM_ICON />}>{!walletAddress && phantomConnect()}</DropdownItem>
          <DropdownItem leftIcon={<BONIFIDA_ICON />}>{!walletAddress && bonifidaConnect()}</DropdownItem>
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
            <h3>chains</h3>
          </DropdownItem>
          <DropdownItem leftIcon={<TSTATION_ICON />}>{terraStConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WC_ICON/>}>{walletConnect()}</DropdownItem>
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
            <h3>chains</h3>
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
            <h3>chains</h3>
          </DropdownItem>
          <DropdownItem leftIcon={<MM_ICON />}>{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WC_ICON />}>{walletConnect()}</DropdownItem>
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
            <h3>chains</h3>
          </DropdownItem>
          {/* <DropdownItem leftIcon={<WC_ICON />}>{<WalletConnectButton />}</DropdownItem> */}
          <DropdownItem leftIcon={<LIGHTMODE_ICON />}>{lightMode()}</DropdownItem>
          <DropdownDonate>{donateButton()}</DropdownDonate>
        </div>
      </CSSTransition>
    </div>
  );
}
