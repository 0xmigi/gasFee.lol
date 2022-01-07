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




// chain icons
import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../assets/icons/bolt.svg';
import { ReactComponent as LunaIcon } from '../../assets/icons/terra.4c802748.svg';
import { ReactComponent as DotIcon } from '../../assets/icons/dot.svg';
import { ReactComponent as WaveIcon } from '../../assets/icons/waves-waves-logo.svg';
import { ReactComponent as AvaxIcon } from '../../assets/icons/avax.svg';
import { ReactComponent as FtmIcon } from '../../assets/icons/fantom.svg';
import { ReactComponent as CeloIcon } from '../../assets/icons/celo.svg';
import { ReactComponent as OneIcon } from '../../assets/icons/harmony.svg';
import { ReactComponent as SolIcon } from '../../assets/icons/solana.svg';
import { ReactComponent as OpIcon } from '../../assets/icons/optimism.caeb9392.svg';
import { ReactComponent as ArbiIcon } from '../../assets/icons/arbitrum.svg';
import { ReactComponent as BscIcon } from '../../assets/icons/bsc.svg';
import { ReactComponent as XdaiIcon } from '../../assets/icons/xdai.svg';
import { ReactComponent as EthIcon } from '../../../node_modules/cryptocurrency-icons/svg/color/eth.svg';
import { ReactComponent as MaticIcon } from '../../../node_modules/cryptocurrency-icons/svg/color/matic.svg';
import { ReactComponent as AtomIcon } from '../../../node_modules/cryptocurrency-icons/svg/color/atom.svg';
import { ReactComponent as AdaIcon } from '../../../node_modules/cryptocurrency-icons/svg/color/ada.svg';
import { ReactComponent as AlgoIcon } from '../../../node_modules/cryptocurrency-icons/svg/color/algo.svg';


// wallet icons
import { ReactComponent as PhantomIcon } from '../../assets/icons/phtm.svg';
import { ReactComponent as BonifidaIcon } from '../../assets/icons/bonifida.svg';
import { ReactComponent as MmIcon } from '../../assets/icons/mm.svg';
import { ReactComponent as WalletConnectIcon } from '../../assets/icons/walletConnect.svg';
import { ReactComponent as CbWalletIcon } from '../../assets/icons/cbWallet.svg';
import { ReactComponent as StationIcon } from '../../assets/icons/station.svg';
import { ReactComponent as RabbyIcon } from '../../assets/icons/rabby.svg';
import { ReactComponent as Coin98Icon } from '../../assets/icons/coin98.svg';
import { ReactComponent as KeplrIcon } from '../../assets/icons/keplr.svg';
import { ReactComponent as CosmoStIcon } from '../../assets/icons/cosmostation.svg';
import { ReactComponent as XdefiIcon } from '../../assets/icons/xdefi.svg';
import { ReactComponent as CloverIcon } from '../../assets/icons/clover.svg';







export default function Nav(props) {


  
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const [newChain, setNewChain] = useState({});
  const [errorMessage, setErrorMessage] = useState("MetaMask");
  const [defaultAccount, setDefaultAccount] = useState("MetaMask");
  const [errorMessageR, setErrorMessageR] = useState("Rabby");
  const [defaultAccountR, setDefaultAccountR] = useState("Rabby");
  const [errorMessageXd, setErrorMessageXd] = useState("xDefi");
  const [defaultAccountXd, setDefaultAccountXd] = useState("xDefi");
  const [userBalance, setUserBalance] = useState(null);


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
               xDai
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
            onClick={() => setNewChain("0x63654c40")}
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
        <Link to="/optimisum">
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

  const Chains = () => {
    const { chainId, chain } = useChain();
    let activeChain = useRef();
   
    return() => {

      try {
        if (typeof window.ethereum !== undefined && window.ethereum !== "") {
          window.ethereum.request({method: 'eth_requestAccounts'})

          console.log(newChain);

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
            // props.setRecentAccount({ newAccount });
    
            if (chainId === "0x1") {
              console.log("connected to ethereum", { chainId });
            } else if (chainId === "0xa") {
              console.log("connected to optimisum", {chainId});
            } else if (chainId === "0x38") {
              console.log("connected to bsc", {chainId});
            } else if (chainId === "0x89") {
              console.log("connected to polygon", {chainId});
            } else if (chainId === "0xa4b1") {
              console.log("connected to arbitrum", {chainId});
            } else if (chainId === "0x64") {
              console.log("connected to xDAi", {chainId});
            } else if (chainId === "0xa86a") {
              console.log("connected to avalanche", {chainId});
            } else if (chainId === "0xfa") {
              console.log("connected to fantom", {chainId});
            } else if (chainId === "0xa4ec") {
              console.log("connected to celo", {chainId});
            } else if (chainId === "0x63564c40") {
              console.log("connected to harmony", {chainId});
            } else if (chainId === "0x505") {
              console.log("connected to moonriver", {chainId});
            } else if (chainId === "0x4e45152") {
              console.log("connected to aurora", {chainId});   
            } 
            
              else if (chainId === "0x4") {                         // testnets <<<<<<<<--------------------------------------------------
              console.log("connected to rinkeby", {chainId});
            } else {
              console.log({chainId});
              console.log({chain});
            }
            activeChain = newChain;
            props.setRecentAccount({ activeChain, newAccount });
      
            console.log(chainId)
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


  
  // useEffect(() => {
    
  // }, [defaultAccount])


  // const setActiveChain = ({chainId});
  // setActiveChain(activeChain.current.focus());

  // function TextInputWithFocusButton() {
  //   const inputEl = useRef(null);
  //   const onButtonClick = () => {
  //     // `current` points to the mounted text input element
  //     inputEl.current.focus();
  //   };
  //   return (
  //     <>
  //       <input ref={inputEl} type="text" />
  //       <button onClick={onButtonClick}>Focus the input</button>
  //     </>
  //   );
  // }
  
  


  // want to return all gas spending transaction 
  // const getTransactions = async (address) => {
  //   const url = `/api/etherscan?address=${address}`;
  //   const response = await fetch(url).then((resp) => resp.json());
  //      await provider.getTransactionCount(address);
  //   return response?.result ?? [];
  // };

  // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // provider.on("network", (newNetwork, oldNetwork) => {
  //     // When a Provider makes its initial connection, it emits a "network"
  //     // event with a null oldNetwork along with the newNetwork. So, if the
  //     // oldNetwork exists, it represents a changing network
  //     if (oldNetwork) {
  //         window.location.reload();
  //     }
  // });
  
  // const onChange = props.setRecentAccount({ defaultAccount, userBalance })

      

  // const chainChangedHandler = () => {
  //   window.location.reload();
  // }

  // window.ethereum.on('accountsChanged', accountChangedHandler);
  // window.ethereum.on('chainChanged', chainChangedHandler)
  const f = [];


  
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
  const [inputAddress, setInputAddress] = useState("paste");

  let displayAddress = (event) => {
    const newValue = event.target.value;
    setInputAddress(newValue)
  };

  return (
    <div>
      <input 
         className="paste-bar"
         type="text"
         placeholder={inputAddress}
        //  autoFocus="autoFocus"
        //  value={value}
         onChange={displayAddress}
      />
    </div>
  );
};



  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button-chain">{props.leftIcon}</span>
        {props.children}
        
      </a>
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
            leftIcon={<EthIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchEth()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BscIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchBsc()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<MaticIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchMatic()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<OpIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="Optimisum"
            >
            <h2>{chainSwitchOp()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<ArbiIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchArbi()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<XdaiIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchXdai()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<AvaxIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchAvax()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<FtmIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchFtm()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<CeloIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchCelo()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<OneIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchOne()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<AtomIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="Cosmos"
            >
            <h2>{chainSwitchAtom()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<SolIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="Solana"
            >
            <h2>{chainSwitchSol()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<LunaIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="Terra"
            >
            <h2>{chainSwitchLuna()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<AdaIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchAda()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<DotIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="Polkadot"
            >
            <h2>{chainSwitchDot()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<WaveIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchWaves()}</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<AlgoIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains"
            >
            <h2>{chainSwitchAlgo()}</h2>
          </DropdownItem>


          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="evmChains" 
            >
            <h2>EVM chains</h2>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<MmIcon />} >{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WalletConnectIcon />}>{<WalletConnectButton />}</DropdownItem>
          <DropdownItem leftIcon={<CbWalletIcon />}>{coinBaseConnect()}</DropdownItem>
          <DropdownItem leftIcon={<RabbyIcon />}>{rabbyConnect()}</DropdownItem>
          <DropdownItem >{PasteAddressConnect()}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Optimisum'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<MmIcon />}>{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WalletConnectIcon />}>{<WalletConnectButton />}</DropdownItem>
          <DropdownItem leftIcon={<CbWalletIcon />}>{coinBaseConnect()}</DropdownItem>
          <DropdownItem leftIcon={<RabbyIcon />}>{rabbyConnect()}</DropdownItem>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<PhantomIcon />}>{!walletAddress && phantomConnect()}</DropdownItem>
          <DropdownItem leftIcon={<BonifidaIcon />}>{chainSwitchBsc()}</DropdownItem>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<StationIcon />}>{terraStConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WalletConnectIcon />}>{<WalletConnectButton />}</DropdownItem>
          <DropdownItem leftIcon={<XdefiIcon />}>{xdefiConnect()}</DropdownItem>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<KeplrIcon />}>{keplrConnect()}</DropdownItem>
          <DropdownItem leftIcon={<CosmoStIcon />}>{cosmoStConnect()}</DropdownItem>
          <DropdownItem leftIcon={<Coin98Icon />}>{coin98Connect()}</DropdownItem>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>choose a wallet</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<MmIcon />}>{metaMaskConnect()}</DropdownItem>
          <DropdownItem leftIcon={<WalletConnectIcon />}>{<WalletConnectButton />}</DropdownItem>
          <DropdownItem leftIcon={<CbWalletIcon />}>{coinBaseConnect()}</DropdownItem>
          <DropdownItem leftIcon={<CloverIcon />}>{cloverConnect()}</DropdownItem>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Other Chains</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<WalletConnectIcon />}>{<WalletConnectButton />}</DropdownItem>
          
        </div>
      </CSSTransition>
    </div>
  );
}
