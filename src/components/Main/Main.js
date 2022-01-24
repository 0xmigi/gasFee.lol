import './main.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import converter from "bech32-converting";
import { LCDClient } from '@terra-money/terra.js';
import * as web3 from '@solana/web3.js';
import $ from 'jquery';
import DoughnutChart from '../Charts/DoughnutChart';


import Ethereum from '../chains/Ethereum';
import BSC from '../chains/Binance';
import Xdai from '../chains/xDai';
import Polygon from '../chains/Polygon';
import Optimism from '../chains/Optimisum';
import Arbitrum from '../chains/Arbitrum';
import Avalanche from '../chains/Avalanche';
import Celo from '../chains/Celo';
import Harmony from '../chains/Harmony';
import Solana from '../chains/Solana';
import Cosmos from '../chains/Cosmos';
import Terra from '../chains/Terra';
import Waves from '../chains/Waves';
import Polkadot from '../chains/Polkadot';
import Algorand from '../chains/Algorand';
import Cardano from '../chains/Cardano';
import Fantom from '../chains/Fantom';
import Moonriver from '../chains/Moonriver';
import Aurora from '../chains/Aurora';

import Home from '../Home/Home';
import mcPepe from '../../assets/icons/mcPepeSmol.png';
import LineChart from '../Charts/LineChart';
import { chain } from 'lodash';
import { ETH_ICON, BNB_ICON, OP_ICON, MATIC_ICON, AVAX_ICON, ARBI_ICON, FTM_ICON, ONE_ICON, MOVR_ICON, SOL_ICON, CELO_ICON, GNOSIS_ICON, AURORA_ICON} from '../App/constants';

export const ETHERSCAN_KEY = "KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD";
export const OPTISCAN_KEY = "84EIKB5YSF17UHZK2778T1HM3Q8DPN6F29";
export const BSCSCAN_KEY = "UWB7YUCVQXT7TGFK41TNJSJBIHDQ1JGU9D";
export const POLYGONSCAN_KEY = "QDPWKASEUSSYTKX9ZVMSSQGX4PTCZGHNC8";
export const SNOWTRACE_KEY = "78X9UB1WYTRQQ9Q2G53TR6XQ8P662BDVVK";
export const FTMSCAN_KEY = "B5UU3GDR3VJYVXFYT6RPK5RA6I8J5CV6B3";
export const MOONSCAN_KEY = "54HHCHQRAEXBCTS2ZVTSJ991Q34MDB2CRD";
export const ARBISCAN_KEY = "3S4P8WRXX34R5DVCCRG3GECVF5SFV5U3QW";



export default function Main(props) {
  // const [cooking, setCooking] = useState()


  // useEffect(() => {
  //   setCooking(
  //     <div className="plus-ultra">
  //       <div className="plus-ultra-panel">
  //         <img src={mcPepe} alt="McPepe"/>
  //       </div>
  //     </div>
  //   )
  //   return(() => {
  //     props.setCookingStatus={cooking}
  //   })
  // }, []);
  
  


  function multiply(x, y) {
    var prod = [];
    var i;
    for (i=0; i < x.length; i++) {
        prod[i] = x[i] * y[i];
    }

    return prod;
  }

  function formatter(num) {
    return num > 999999 ? (num/1e6).toFixed(3) + ' million' : num;
  }

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });

    return vars;
  }

  function comma(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");
  }

  const [balanceTotal, setBalanceTotal] = useState();
  const [nativeGasFeeTotal, setNativeGasFeeTotal] = useState();
  const [usdGasFeeTotal, setUsdGasFeeTotal] = useState();
  const [gweiTotal, setGweiTotal] = useState();
  const [sentNumTransactions, setSentNumTransactions] = useState();
  const [avarageGweiTotal, setAvarageGweiTotal] = useState();
  const [failedNumTransactions, setFailedNumTransactions] = useState();
  const [usdFailedTotal, setUsdFailedTotal] = useState();
  const [paidTokenTypes, setPaidTokenTypes] = useState();
  const [totalSentTransactions, setTotalSentTransactions] = useState(0);
  const [totalFailedNumTransactions, setTotalFailedNumTransactions] = useState(0);
  const [totalUsdFailedTotal, setTotalUsdFailedTotal] = useState(0);

  const [totalSentSol, setTotalSentSol] = useState(0);
  const [solToken, setSolToken] = useState();
  const [totalFailedSol, setTotalFailedSol] = useState(0);
  const [totalUsdFailedSol, setTotalUsdFailedSol] = useState(0);

  const [normalGasUsd, setNormalGasUsd] = useState(0);
  const [fastGasUsd, setFastGasUsd] = useState(0);
  const [instantGasUsd, setInstantGasUsd] = useState(0);
  // const [chainName, setChainName] = useState("ethereum");
  const [normalGas, setNormalGas] = useState();
  const [fastGas, setFastGas] = useState();
  const [instantGas, setInstantGas] = useState();

  let address = props.recentAccount.newAddress;
  let terraAddress = props.recentAccount.terraAccount;
  let solAddress = props.recentAccount.solAccount;


  let evmChainId = props.recentAccount.activeChain;
  let terraChainID = props.recentAccount.terraChain;
  let x = 0;

  const [gasData, setGasData] = useState();

  const [ethUsd, setEthUsd] = useState(0);
  const [opUsd, setOpUsd] = useState(0);
  const [bscUsd, setBscUsd] = useState(0);
  const [maticUsd, setMaticUsd] = useState(0);
  const [arbiUsd, setArbiUsd] = useState(0);
  const [xdaiUsd, setXdaiUsd] = useState(0);
  const [avaxUsd, setAvaxUsd] = useState(0);
  const [ftmUsd, setFtmUsd] = useState(0);
  const [celoUsd, setCeloUsd] = useState(0);
  const [oneUsd, setOneUsd] = useState(0);
  const [movrUsd, setMovrUsd] = useState(0);
  const [auroraUsd, setAuroraUsd] = useState(0);
  const [solUsd, setSolUsd] = useState(0);
  const [rEthUsd, setRethUsd] = useState(0);

  // Terra History
  const getTerraTransactions = async(terraAddress) => {
    const terra = new LCDClient({
      URL: 'https://lcd.terra.dev',
      terraChainID: 'columbus-5'
    });


    const accountInfo = await terra.auth.accountInfo();
    console.log(terraAddress);
    console.log(terra);
    console.log("terra accountInfo is ", accountInfo);
  }

  // Solana History
  const getSolTransactions = async(solAddress) => {
    let soltokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let sol = `https://public-api.solscan.io/account/transactions?account=${solAddress}&limit=100`
    let responseSol = await fetch(sol);

    soltokenusd = soltokenusd["solana"].usd;
    console.log("soltokenusd is ", soltokenusd);
    if (responseSol.ok) {var soljson = await responseSol.json();} else {console.error("HTTP-Error: " + responseSol.status);}

    let soltxs = soljson;

    let solfrom, soltxsOut;
    let solt = soltxs.length;

    while (solt===100) {
      solfrom = soljson[soljson.length - 1].txHash;
      sol = `https://public-api.solscan.io/account/transactions?account=${solAddress}&beforeHash=${solfrom}&limit=100`;
      responseSol = await fetch(sol)

      if (responseSol.ok) {
        soljson = await responseSol.json()
        // console.log(soljson);
      } else {
        console.error('big pwoblam : ' + responseSol.status);
        break
      }

      solt = soljson.length;
      soltxs.push.apply(soltxs, soljson);
      
    };


    soltxsOut = soltxs;
    soltxsOut = soltxsOut.map(({ confirmations, ...item }) => item);
    soltxsOut = new Set(soltxsOut.map(JSON.stringify));
    soltxsOut = Array.from(soltxsOut).map(JSON.parse);

    var sOut = soltxsOut.length;
    

    if (sOut > 0) {
    let solfee = soltxs.map(item => item.fee);
    let lamportTotal = solfee.reduce((a, b) => {return a + b;}, 0)
    let solFeeUsd = soltokenusd * (lamportTotal * 0.000000001);
    let status = soltxs.filter(item => item.status === "Fail");
    let feeFail = status.map(item => item.fee);
    let fTotal = feeFail.reduce((a, b) => {return a + b;}, 0)
    let failFeeUsd = soltokenusd * (fTotal * 0.000000001);
    setSolUsd(solFeeUsd);
    setTotalSentSol(sOut);
    setTotalFailedSol(status.length);
    setTotalUsdFailedSol(failFeeUsd);
    setGasData(solfee);

    setNativeGasFeeTotal("sol" + (lamportTotal * 0.000000001).toFixed(4));
    setUsdGasFeeTotal("$" + comma(formatter((solFeeUsd).toFixed(4))));
    setSentNumTransactions(sOut);
    // setAvarageGweiTotal(comma((gasPriceTotal / nOut / 1e9).toFixed(1)));
    setFailedNumTransactions(comma(status.length));
    setUsdFailedTotal("$" + (failFeeUsd).toFixed(4));

    setNormalGas("5000 lamports");
    setFastGas("10000 lamports");
    setInstantGas("15000 lamports");
    setNormalGasUsd("$" + comma(formatter((soltokenusd * 0.000005).toFixed(6))));
    setFastGasUsd("$" + comma(formatter((soltokenusd * 0.00001).toFixed(6))));
    setInstantGasUsd("$" + comma(formatter((soltokenusd * 0.000015).toFixed(6))));
    
    // console.log("feeFail is ", failFeeUsd);
    // console.log("solfee is ", solfee);
    // console.log("lamportTotal is ", lamportTotal);
    // console.log("solFeeUsd is ", solFeeUsd);
    // console.log("soltokenusd is ", soltokenusd);
    setSolToken(<div className="token-types"><SOL_ICON height={"20px"} width={"20px"}/></div>)
    }
  }

  
// EVM chains History
  const getEvmTransactions = async(address) => {

      const gasChain = [{}]
      gasChain[''] = {zapperName: "ethereum"};
      gasChain['0x1'] = {zapperName: "ethereum"};
      gasChain['0x38'] = {zapperName: "binance-smart-chain"}
      gasChain['0xa'] = {zapperName: "optimism"}
      gasChain['0x89'] = {zapperName: "polygon"}
      gasChain['0xa86a'] = {zapperName: "avalanche"}
      gasChain['0xfa'] = {zapperName: "fantom"}
      gasChain['0x505'] = {zapperName: "moonriver"}
      gasChain['0xa4b1'] = {zapperName: "arbitrum"}
      gasChain['0x64'] = {zapperName: "xdai"}
      gasChain['0xa4ec'] = {zapperName: "celo"}
      gasChain['0x63564c40'] = {zapperName: "harmony"}
      gasChain['0x4e45152'] = {zapperName: "aurora"}
      gasChain['0x4'] = {zapperName: "rinkeby-ethereum"}
  
  
      function testNum(isEth) {
        let eip1559;
        if (isEth === 'ethereum') {
          eip1559 = 'true';
        } else {
          eip1559 = 'false';
        }
        return (
          eip1559
          );
      }
  
      let chainName = gasChain[evmChainId].zapperName;
      const postLondon = testNum(chainName);
      console.log("postLondon gas >", postLondon);
      
      let connectedGasPrice = `https://api.zapper.fi/v1/gas-price?network=${chainName}&eip1559=${postLondon}&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`;
  
      // const getGasPrice = async() => {
        const chainGasPrice = await fetch(connectedGasPrice)
        .then(response => {return response.json()})
        .catch(err => {console.log('Error', err)});
        console.log(chainName);
        // setActiveGasPrice(chainGasPrice);
        setNormalGas((postLondon === "true" ? ((chainGasPrice.standard.baseFeePerGas) + "-" + (chainGasPrice.standard.maxFeePerGas)) : chainGasPrice.standard) + " gwei");
        setFastGas((postLondon === "true" ? ((chainGasPrice.fast.baseFeePerGas) + "-" + (chainGasPrice.fast.maxFeePerGas)) : chainGasPrice.fast) + " gwei");
        setInstantGas((postLondon === "true" ? ((chainGasPrice.instant.baseFeePerGas) + "-" + (chainGasPrice.instant.maxFeePerGas)) : chainGasPrice.instant) + " gwei");

        let standardgas = (postLondon === "true" ? chainGasPrice.standard.baseFeePerGas : chainGasPrice.standard);
        let fastgas = (postLondon === "true" ? chainGasPrice.fast.baseFeePerGas : chainGasPrice.fast);
        let instantgas = (postLondon === "true" ? chainGasPrice.instant.baseFeePerGas : chainGasPrice.instant);
  
        console.log(chainGasPrice.standard);

    const chainConfig = [{}]

    chainConfig['0x1'] = {id: '0x1', shortname: 'eth', name:'Ethereum', symbol: 'eth', coingecko_name: 'ethereum', token: 'ETH', color: '#582a2a', explorer_uri: 'https://api.etherscan.io', key: `${ETHERSCAN_KEY}`}
    chainConfig['0x38'] = {id: '0x38', shortname: 'bsc', name:'Binance Smart Chain', symbol: 'bnb', coingecko_name: 'binancecoin', token: 'BSC', color: "#f4ce03", explorer_uri: 'https://api.bscscan.com', key: `${BSCSCAN_KEY}`}
    chainConfig['0x64'] = {id: '0x64', shortname: 'xdai', name:'xDai', symbol: 'xdai', coingecko_name: 'gnosis', token: 'GNO', color: '#48a9a6', explorer_uri: 'https://blockscout.com/xdai/mainnet'}
    chainConfig['0x89'] = {id: '0x89', shortname: 'matic', name:'Polygon', symbol: 'matic', coingecko_name: 'matic-network', token: 'MATIC', color: '#9d03f4', explorer_uri: 'https://api.polygonscan.com', key: `${POLYGONSCAN_KEY}`}
    chainConfig['0xfa'] = {id: '0xfa', shortname: 'ftm', name:'Fantom', symbol: 'ftm', coingecko_name: 'fantom', token: 'ƒ', color: '#00dbff', explorer_uri: 'https://api.ftmscan.com', key: `${FTMSCAN_KEY}`}
    chainConfig['0xa86a'] = {id: '0xa86a', shortname: 'avax', name:'Avalanche', symbol: 'avax', coingecko_name: 'avalanche-2', token: 'Ã', color: '#ec1616', explorer_uri: 'https://api.snowtrace.io', key: `${SNOWTRACE_KEY}`}
    chainConfig['0x63564c40'] = {id: '0x63564c40', shortname: 'one', name:'Harmoney One', symbol: 'one', coingecko_name: 'harmony', token: 'O', color: '#ec1616', explorer_uri: 'https://api.harmony.one'}
    chainConfig['0xa4ec'] = {id: '0xa4ec', shortname: 'celo', name:'Celo', symbol: 'celo', coingecko_name: 'celo', token: 'C', color: '#ec1616', explorer_uri: 'https://explorer.celo.org'}
    chainConfig['0xa4b1'] = {id: '0xa4b1', shortname: 'arbi', name:'Arbitrum', symbol: 'aeth', coingecko_name: 'ethereum', token: 'aΞ', color: '#ec1616', explorer_uri: 'https://api.arbiscan.io', key: `${ARBISCAN_KEY}`}
    chainConfig['0x505'] = {id: '0x505', shortname: 'movr', name:'Moonriver', symbol: 'movr', coingecko_name: 'moonriver', token: 'M', color: '#ec1690', explorer_uri: 'https://api-moonriver.moonscan.io', key: `${MOONSCAN_KEY}`}
    chainConfig['0x4e45152'] = {id: '0x4e45152', shortname: 'aurora', name:'Aurora', symbol: 'aurora', coingecko_name: 'aurora-near', token: 'Au', color: '#ec1616', explorer_uri: 'https://explorer.mainnet.aurora.dev'}
    chainConfig['0xa'] = {id: '0xa', shortname: 'op', name:'Optimism', symbol: 'oeth', coingecko_name: 'ethereum', token: 'oΞ', color: '#ec8816', explorer_uri: 'https://api-optimistic.etherscan.io', key: `${OPTISCAN_KEY}`}
    // chainConfig['0xa'] = {id: '0xa', shortname: 'op', name:'Optimism', symbol: 'oeth', coingecko_name: 'opEthereum', token: 'oΞ', color: '#ec1616', explorer_uri: 'https://api.optimistic.etherscan.io', key: '84EIKB5YSF17UHZK2778T1HM3Q8DPN6F29'}

    //testnets
    chainConfig['0x4'] = {id: '0x4', shortname: 'eth', name:'Rinkeby', symbol: 'eth', coingecko_name: 'ethereum', token: 'Ξ', color: '#03a9f4', explorer_uri: 'https://api-rinkeby.etherscan.io', key: 'KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD'}

    
    let coingeckoSymbol = chainConfig[evmChainId].coingecko_name;
    let tokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids='+coingeckoSymbol+'&vs_currencies=usd')
    .then(response => {return response.json()})
    .catch(err => {
      console.log('Error', err);
    })

    console.log("tokenusd is officailly", tokenusd);
    console.log(chainConfig[evmChainId].token);

    tokenusd = tokenusd[coingeckoSymbol].usd;



    const oneaddress = address;
    // const address = "0xf0cc8d20dce350221ad4688beb2ffa57f1dce72f" "0x84163c655c9e20150f81c1038686a8bc9c15a8d4";
    const APIurl = "https://rpc.s0.t.hmny.io";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

     
    let ethtokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let optokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let bsctokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let matictokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let arbitokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let xdaitokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=gnosis&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let avaxtokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let ftmtokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=fantom&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let celotokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=celo&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let onetokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=harmony&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let movrtokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=moonriver&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let auroratokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=aurora-near&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})
    let rethtokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd').then(response => {return response.json()}).catch(err => {console.log('Error', err)})

    ethtokenusd = ethtokenusd["ethereum"].usd;
    bsctokenusd = bsctokenusd["binancecoin"].usd;
    optokenusd = optokenusd["ethereum"].usd;
    matictokenusd = matictokenusd["matic-network"].usd;
    arbitokenusd = arbitokenusd["ethereum"].usd;
    xdaitokenusd = xdaitokenusd["gnosis"].usd;
    avaxtokenusd = avaxtokenusd["avalanche-2"].usd;
    ftmtokenusd = ftmtokenusd["fantom"].usd;
    celotokenusd = celotokenusd["celo"].usd;
    onetokenusd = onetokenusd["harmony"].usd;
    movrtokenusd = movrtokenusd["moonriver"].usd;
    auroratokenusd = auroratokenusd["aurora-near"].usd;
    rethtokenusd = rethtokenusd["ethereum"].usd;

    console.log("ethtokenusd is ", ethtokenusd);


    // EVM chains 
    let eth = chainConfig["0x1"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_KEY}`
    let op = chainConfig["0xa"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${OPTISCAN_KEY}`
    let bsc = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${BSCSCAN_KEY}`
    let matic = chainConfig["0x89"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${POLYGONSCAN_KEY}`
    let avax = chainConfig["0xa86a"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${SNOWTRACE_KEY}`
    let ftm = chainConfig["0xfa"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${FTMSCAN_KEY}`
    let movr = chainConfig["0x505"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${MOONSCAN_KEY}`
    let arbi = chainConfig["0xa4b1"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${ARBISCAN_KEY}`
    let xdai = chainConfig["0x64"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc`
    let celo = chainConfig["0xa4ec"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc`
    var raw = JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "hmyv2_getTransactionsHistory",
      params: [
        {
          address: converter("one").toBech32(oneaddress),
          pageIndex: 0,
          fullTx: true,
          txType: "ALL",
          order: "ASC"
        }
      ]
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    let aurora = chainConfig["0x4e45152"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc`
    // let reth = chainConfig["0x4"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`


    console.log("celo is ", celo)

    let responseEth = await fetch(eth);
    let responseOp = await fetch(op);
    let responseBsc = await fetch(bsc);
    let responseMatic = await fetch(matic);
    let responseAvax = await fetch(avax);
    let responseFtm = await fetch(ftm);
    let responseMovr = await fetch(movr);
    let responseArbi = await fetch(arbi);
    let responseXdai = await fetch(xdai);
    let responseCelo = await fetch(celo);
    let responseOne = await fetch(APIurl, requestOptions);
    let responseAurora = await fetch(aurora);
    // let responseReth = await fetch(reth);

    //  <<<<-------------------------------------------------------
    if (responseEth.ok) {var ejson = await responseEth.json();} else {console.error("HTTP-Error: " + responseEth.status);}
    if (responseOp.ok) {var opjson = await responseOp.json();} else {console.error("HTTP-Error: " + responseOp.status);}
    if (responseBsc.ok) {var bscjson = await responseBsc.json();} else {console.error("HTTP-Error: " + responseBsc.status);}
    if (responseMatic.ok) {var maticjson = await responseMatic.json();} else {console.error("HTTP-Error: " + responseMatic.status);}
    if (responseAvax.ok) {var avaxjson = await responseAvax.json();} else {console.error("HTTP-Error: " + responseAvax.status);}
    if (responseFtm.ok) {var ftmjson = await responseFtm.json();} else {console.error("HTTP-Error: " + responseFtm.status);}
    if (responseMovr.ok) {var movrjson = await responseMovr.json();} else {console.error("HTTP-Error: " + responseMovr.status);}
    if (responseArbi.ok) {var arbijson = await responseArbi.json();} else {console.error("HTTP-Error: " + responseArbi.status);}
    if (responseXdai.ok) {var xdaijson = await responseXdai.json();} else {console.error("HTTP-Error: " + responseXdai.status);}
    if (responseCelo.ok) {var celojson = await responseCelo.json();} else {console.error("HTTP-Error: " + responseCelo.status);}
    if (responseOne.ok) {var onejson = await responseOne.json([]);} else {console.error("HTTP-Error: " + responseOne.status);}
    if (responseAurora.ok) {var aurorajson = await responseAurora.json();} else {console.error("HTTP-Error: " + responseAurora.status);}
    // if (responseReth.ok) {var rethjson = await responseReth.json();} else {console.error("HTTP-Error: " + responseReth.status);}

    console.log(responseOne);
    const arr = await onejson;


    //  <<<<-------------------------------------------------------
    let etxs = ejson['result'];
    let optxs = opjson['result'];
    let bsctxs = bscjson['result'];
    let matictxs = maticjson['result'];
    let avaxtxs = avaxjson['result'];
    let ftmtxs = ftmjson['result'];
    let movrtxs = movrjson['result'];
    let arbitxs = arbijson['result'];
    let xdaitxs = xdaijson['result'];
    let celotxs = celojson['result'];
    let onetxs = arr.result.transactions;
    let auroratxs = aurorajson['result'];
    // let rethtxs = rethjson['result'];
    

    let e = etxs.length;
    let opt = optxs.length;
    let bsct = bsctxs.length;
    let matict = matictxs.length;
    let avaxt = avaxtxs.length;
    let ftmt = ftmtxs.length;
    let movrt = movrtxs.length;
    let arbit = arbitxs.length;
    let xdait = xdaitxs.length;
    let celot = celotxs.length;
    let onet = onetxs.length;
    let aurorat = auroratxs.length;
    // let retht = rethtxs.length;

    let efrom, etxs2;
    let opfrom, optxs2;
    let bscfrom, bsctxs2;
    let maticfrom, matictxs2;
    let avaxfrom, avaxtxs2;
    let ftmfrom, ftmtxs2;
    let movrfrom, movrtxs2;
    let arbifrom, arbitxs2;
    let xdaifrom, xdaitxs2;
    let celofrom, celotxs2;
    let onefrom, onetxs2;
    let aurorafrom, auroratxs2;
    let rethfrom, rethtxs2;
    //  <<<<-------------------------------------------------------
    while (e===10000) {
      efrom = etxs[etxs.length - 1].blockNumber
      eth = chainConfig["0x1"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${efrom}&endblock=99999999&sort=asc&apikey=${ETHERSCAN_KEY}`
      responseEth = await fetch(eth)

      if (responseEth.ok) { // if HTTP-status is 200-299
          ejson = await responseEth.json();
          console.log(ejson)
      } else {
          console.log('big pwoblam : ' + responseEth.status);
          break
      }

      etxs2 = ejson['result']
      e = etxs2.length
      etxs.push.apply(etxs, etxs2)
    };
    while (bsct===10000) {
      bscfrom = bsctxs[bsctxs.length - 1].blockNumber
      bsc = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${bscfrom}&endblock=99999999&sort=asc&apikey=${BSCSCAN_KEY}`
      responseBsc = await fetch(bsc)

      if (responseBsc.ok) {
        bscjson = await responseBsc.json();
        console.log(bscjson)
      } else {
        console.log('big pwoblam : ' + responseBsc.status);
        break
      }

      bsctxs2 = bscjson['result']
      bsct = bsctxs2.length
      bsctxs.push.apply(bsctxs, bsctxs2)
    };
    while (opt===10000) {
      opfrom = optxs[optxs.length - 1].blockNumber
      op = chainConfig["0xa"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${opfrom}&endblock=99999999&sort=asc&apikey=${OPTISCAN_KEY}`
      responseOp = await fetch(op)

      if (responseOp.ok) {
        opjson = await responseOp.json();
        console.log(opjson)
      } else {
        console.log('big pwoblam : ' + responseOp.status);
        break
      }

      optxs2 = opjson['result']
      opt = optxs2.length
      optxs.push.apply(optxs, optxs2)
    };
    while (matict===10000) {
      maticfrom = matictxs[matictxs.length - 1].blockNumber
      matic = chainConfig["0x89"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${maticfrom}&endblock=99999999&sort=asc&apikey=${POLYGONSCAN_KEY}`
      responseOp = await fetch(matic)

      if (responseOp.ok) {
        maticjson = await responseOp.json();
        console.log(maticjson)
      } else {
        console.log('big pwoblam : ' + responseMatic.status);
        break
      }

      matictxs2 = maticjson['result']
      matict = matictxs2.length
      matictxs.push.apply(matictxs, matictxs2)
    };
    while (avaxt===10000) {
      avaxfrom = avaxtxs[avaxtxs.length - 1].blockNumber
      avax = chainConfig["0xa86a"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${avaxfrom}&endblock=99999999&sort=asc&apikey=${SNOWTRACE_KEY}`
      responseAvax = await fetch(avax)

      if (responseAvax.ok) {
        avaxjson = await responseAvax.json();
        console.log(avaxjson)
      } else {
        console.log('big pwoblam : ' + responseAvax.status);
        break
      }

      avaxtxs2 = avaxjson['result']
      avaxt = avaxtxs2.length
      avaxtxs.push.apply(avaxtxs, avaxtxs2)
    };
    while (arbit===10000) {
      arbifrom = arbitxs[arbitxs.length - 1].blockNumber
      arbi = chainConfig["0xa4b1"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${arbifrom}&endblock=99999999&sort=asc&apikey=${ARBISCAN_KEY}`
      responseAvax = await fetch(arbi)

      if (responseArbi.ok) {
        arbijson = await responseArbi.json();
        console.log(arbijson)
      } else {
        console.log('big pwoblam : ' + responseArbi.status);
        break
      }

      arbitxs2 = arbijson['result']
      arbit = arbitxs2.length
      arbitxs.push.apply(arbitxs, arbitxs2)
    };
    while (xdait===10000) {
      xdaifrom = xdaitxs[xdaitxs.length - 1].blockNumber
      xdai = chainConfig["0x64"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${xdaifrom}&endblock=99999999&sort=asc`
      responseXdai = await fetch(xdai)

      if (responseXdai.ok) {
        xdaijson = await responseXdai.json();
        console.log(xdaijson)
      } else {
        console.log('big pwoblam : ' + responseXdai.status);
        break
      }

      xdaitxs2 = xdaijson['result']
      xdait = xdaitxs2.length
      xdaitxs.push.apply(xdaitxs, xdaitxs2)
    };
    while (ftmt===10000) {
      ftmfrom = ftmtxs[ftmtxs.length - 1].blockNumber
      ftm = chainConfig["0xfa"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${ftmfrom}&endblock=99999999&sort=asc&apikey=${FTMSCAN_KEY}`
      responseFtm = await fetch(ftm)

      if (responseFtm.ok) {
        ftmjson = await responseFtm.json();
        console.log(ftmjson)
      } else {
        console.log('big pwoblam : ' + responseFtm.status);
        break
      }

      ftmtxs2 = ftmjson['result']
      ftmt = ftmtxs2.length
      ftmtxs.push.apply(ftmtxs, ftmtxs2)
    };
    while (onet === 100) {
      onefrom = onetxs[onetxs.length - 1].blockNumber;

      let pgIndex = x++;

      console.log("pgIndex is", pgIndex);
      console.log("from is ", onefrom);

      responseOne = await fetch(APIurl,
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "hmyv2_getTransactionsHistory",
            params: [
              {
                address: converter("one").toBech32(oneaddress),
                pageIndex: pgIndex,
                fullTx: true,
                txType: "ALL",
                order: "ASC"
              }
            ]
          }),
          redirect: "follow"
        });

      console.log("response 129 is ", responseOne);
      

      if (responseOne.ok) {
        onejson = await responseOne.json();
      } else {
        console.log("big pwoblam : " + responseOne.status);
        break;
      }

      let arr2 = await onejson;
      onetxs2 = arr2.result.transactions;
      console.log("txs 2 is ", onetxs2);
      onet = onetxs2.length
      onetxs.push.apply(onetxs, onetxs2)
    };
    while (movrt===10000) {
      movrfrom = movrtxs[movrtxs.length - 1].blockNumber
      movr = chainConfig["0x505"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${movrfrom}&endblock=99999999&sort=asc&apikey=${MOONSCAN_KEY}`
      responseMovr = await fetch(movr)

      if (responseMovr.ok) {
        movrjson = await responseMovr.json();
        console.log(movrjson)
      } else {
        console.log('big pwoblam : ' + responseMovr.status);
        break
      }

      movrtxs2 = movrjson['result']
      movrt = movrtxs2.length
      movrtxs.push.apply(movrtxs, movrtxs2)
    };
    while (celot===10000) {
      celofrom = celotxs[celotxs.length - 1].blockNumber
      celo = chainConfig["0xa4ec"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${celofrom}&endblock=99999999&sort=asc`
      responseCelo = await fetch(celo)

      if (responseCelo.ok) {
        celojson = await responseCelo.json();
        console.log(celojson)
      } else {
        console.log('big pwoblam : ' + responseCelo.status);
        break
      }

      celotxs2 = celojson['result']
      celot = celotxs2.length
      celotxs.push.apply(celotxs, celotxs2)
    };
    while (aurorat===10000) {
      aurorafrom = auroratxs[auroratxs.length - 1].blockNumber
      aurora = chainConfig["0xa4ec"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${aurorafrom}&endblock=99999999&sort=asc`
      responseAurora = await fetch(aurora)

      if (responseAurora.ok) {
        aurorajson = await responseAurora.json();
        console.log(aurorajson)
      } else {
        console.log('big pwoblam : ' + responseAurora.status);
        break
      }

      auroratxs2 = aurorajson['result']
      aurorat = auroratxs2.length
      auroratxs.push.apply(auroratxs, auroratxs2)
    };
    //  <<<<-------------------------------------------------------
    let etxsOut = $.grep(etxs, function(w) {
      return w.from === address.toLowerCase();
    });
    let bsctxsOut = $.grep(bsctxs, function(x) {
      return x.from === address.toLowerCase();
    });
    let optxsOut = $.grep(optxs, function(y) {
      return y.from === address.toLowerCase();
    });
    let matictxsOut = $.grep(matictxs, function(z) {
      return z.from === address.toLowerCase();
    });
    let avaxtxsOut = $.grep(avaxtxs, function(a) {
      return a.from === address.toLowerCase();
    });
    let arbitxsOut = $.grep(arbitxs, function(b) {
      return b.from === address.toLowerCase();
    });
    let xdaitxsOut = $.grep(xdaitxs, function(b) {
      return b.from === address.toLowerCase();
    });
    let ftmtxsOut = $.grep(ftmtxs, function(c) {
      return c.from === address.toLowerCase();
    });
    let onetxsOut = $.grep(onetxs, function (d) {
      return d.from === converter("one").toBech32(oneaddress).toLowerCase();
    });
    let movrtxsOut = $.grep(movrtxs, function(e) {
      return e.from === address.toLowerCase();
    });
    let celotxsOut = $.grep(celotxs, function(e) {
      return e.from === address.toLowerCase();
    });
    let auroratxsOut = $.grep(auroratxs, function(e) {
      return e.from === address.toLowerCase();
    });

    //  <<<<-------------------------------------------------------
    etxsOut = etxsOut.map(({ confirmations, ...item }) => item);
    bsctxsOut = bsctxsOut.map(({ confirmations, ...item }) => item);
    optxsOut = optxsOut.map(({ confirmations, ...item }) => item);
    matictxsOut = matictxsOut.map(({ confirmations, ...item }) => item);
    avaxtxsOut = avaxtxsOut.map(({ confirmations, ...item }) => item);
    arbitxsOut = arbitxsOut.map(({ confirmations, ...item }) => item);
    xdaitxsOut = xdaitxsOut.map(({ confirmations, ...item }) => item);
    ftmtxsOut = ftmtxsOut.map(({ confirmations, ...item }) => item);
    onetxsOut = onetxsOut.map(({ confirmations, ...item }) => item);
    movrtxsOut = movrtxsOut.map(({ confirmations, ...item }) => item);
    celotxsOut = celotxsOut.map(({ confirmations, ...item }) => item);
    auroratxsOut = auroratxsOut.map(({ confirmations, ...item }) => item);

    etxsOut = new Set(etxsOut.map(JSON.stringify));
    bsctxsOut = new Set(bsctxsOut.map(JSON.stringify));
    optxsOut = new Set(optxsOut.map(JSON.stringify));
    matictxsOut = new Set(matictxsOut.map(JSON.stringify));
    avaxtxsOut = new Set(avaxtxsOut.map(JSON.stringify));
    arbitxsOut = new Set(arbitxsOut.map(JSON.stringify));
    xdaitxsOut = new Set(xdaitxsOut.map(JSON.stringify));
    ftmtxsOut = new Set(ftmtxsOut.map(JSON.stringify));
    onetxsOut = new Set(onetxsOut.map(JSON.stringify));
    movrtxsOut = new Set(movrtxsOut.map(JSON.stringify));
    celotxsOut = new Set(celotxsOut.map(JSON.stringify));
    auroratxsOut = new Set(auroratxsOut.map(JSON.stringify));

    etxsOut = Array.from(etxsOut).map(JSON.parse);
    bsctxsOut = Array.from(bsctxsOut).map(JSON.parse);
    optxsOut = Array.from(optxsOut).map(JSON.parse);
    matictxsOut = Array.from(matictxsOut).map(JSON.parse);
    avaxtxsOut = Array.from(avaxtxsOut).map(JSON.parse);
    arbitxsOut = Array.from(arbitxsOut).map(JSON.parse);
    xdaitxsOut = Array.from(xdaitxsOut).map(JSON.parse);
    ftmtxsOut = Array.from(ftmtxsOut).map(JSON.parse);
    onetxsOut = Array.from(onetxsOut).map(JSON.parse);
    movrtxsOut = Array.from(movrtxsOut).map(JSON.parse);
    celotxsOut = Array.from(celotxsOut).map(JSON.parse);
    auroratxsOut = Array.from(auroratxsOut).map(JSON.parse);

    console.log('All outgoing eth txs:', etxsOut)
    console.log('All outgoing bsc txs:', bsctxsOut)
    console.log('All outgoing op txs:', optxsOut)
    console.log('All outgoing matic txs:', matictxsOut)
    console.log('All outgoing avax txs:', avaxtxsOut)
    console.log('All outgoing arbi txs:', arbitxsOut)
    console.log('All outgoing xdai txs:', xdaitxsOut)
    console.log('All outgoing ftm txs:', ftmtxsOut)
    console.log('All outgoing one txs:', onetxsOut)
    console.log('All outgoing movr txs:', movrtxsOut)
    console.log('All outgoing celo txs:', celotxsOut)
    console.log('All outgoing aurora txs:', auroratxsOut)
    //  <<<<-------------------------------------------------------
    var eOut = etxsOut.length;
    var etxsOutFail = $.grep(etxsOut, function(w) {
        return w.isError === '1';
    });
    var bscOut = bsctxsOut.length;
    var bsctxsOutFail = $.grep(bsctxsOut, function(x) {
        return x.isError === '1';
    });
    var opOut = optxsOut.length;
    var optxsOutFail = $.grep(optxsOut, function(y) {
        return y.isError === '1';
    });
    var maticOut = matictxsOut.length;
    var matictxsOutFail = $.grep(matictxsOut, function(z) {
        return z.isError === '1';
    });
    var avaxOut = avaxtxsOut.length;
    var avaxtxsOutFail = $.grep(avaxtxsOut, function(a) {
        return a.isError === '1';
    });
    var arbiOut = arbitxsOut.length;
    var arbitxsOutFail = $.grep(arbitxsOut, function(b) {
        return b.isError === '1';
    });
    var xdaiOut = xdaitxsOut.length;
    var xdaitxsOutFail = $.grep(xdaitxsOut, function(b) {
        return b.isError === '1';
    });
    var ftmOut = ftmtxsOut.length;
    var ftmtxsOutFail = $.grep(ftmtxsOut, function(c) {
        return c.isError === '1';
    });
    var oneOut = onetxsOut.length;
    var onetxsOutFail = $.grep(onetxsOut, function (d) {
        return d.isError === "1";
      });
    var movrOut = movrtxsOut.length;
    var movrtxsOutFail = $.grep(movrtxsOut, function (e) {
        return e.isError === "1";
      });
    var celoOut = celotxsOut.length;
    var celotxsOutFail = $.grep(celotxsOut, function (e) {
        return e.isError === "1";
      });
    var auroraOut = auroratxsOut.length;
    var auroratxsOutFail = $.grep(auroratxsOut, function (e) {
        return e.isError === "1";
      });
    //  <<<<-------------------------------------------------------
    var eOutFail = etxsOutFail.length;
    var bscOutFail = bsctxsOutFail.length;
    var opOutFail = optxsOutFail.length;
    var maticOutFail = matictxsOutFail.length;
    var avaxOutFail = avaxtxsOutFail.length;
    var arbiOutFail = arbitxsOutFail.length;
    var xdaiOutFail = xdaitxsOutFail.length;
    var ftmOutFail = ftmtxsOutFail.length;
    var oneOutFail = onetxsOutFail.length;
    var movrOutFail = movrtxsOutFail.length;
    var celoOutFail = celotxsOutFail.length;
    var auroraOutFail = auroratxsOutFail.length;

    var ethToken;
    var bnbToken;
    var opToken;
    var maticToken;
    var arbiToken;
    var xdaiToken;
    var avaxToken;
    var ftmToken;
    var oneToken;
    var movrToken;
    var celoToken;
    var auroraToken;

        
    if (eOut > 0) {
      var gasUsed = etxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = etxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var ethGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = etxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = etxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var eFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var eUsdFeeFail = (eFeeTotalFail * ethtokenusd / 1e18);
      ethToken = <div className="token-types"><ETH_ICON height={"20px"} width={"20px"}/></div>
    } else {
      eOut = 0;
      eOutFail = 0;
      eUsdFeeFail = 0;
    }; 
    if (bscOut > 0) {
      var gasUsed = bsctxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = bsctxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var bscGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = bsctxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = bsctxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var bscFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var bscUsdFeeFail = (bscFeeTotalFail * bsctokenusd / 1e18)
      bnbToken = <div className="token-types"><BNB_ICON height={"20px"} width={"20px"}/></div>
    } else {
      bscOut = 0;
      bscOutFail = 0;
      bscUsdFeeFail = 0;
    };
    if (opOut > 0) {
      var gasUsed = optxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = optxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var opGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = optxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = optxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var opFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var opUsdFeeFail = (opFeeTotalFail * optokenusd / 1e18)
      opToken = <div className="token-types"><OP_ICON height={"20px"} width={"20px"}/></div>
    } else {
      opOut = 0;
      opOutFail = 0;
      opUsdFeeFail = 0;
    };
    if (maticOut > 0) {
      var gasUsed = matictxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = matictxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var maticGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = matictxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = matictxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var maticFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var maticUsdFeeFail = (maticFeeTotalFail * matictokenusd / 1e18)
      maticToken = <div className="token-types"><MATIC_ICON height={"20px"} width={"20px"}/></div>
    } else {
      maticOut = 0;
      maticOutFail = 0;
      maticUsdFeeFail = 0;
    }
    if (avaxOut > 0) {
      var gasUsed = avaxtxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = avaxtxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var avaxGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = avaxtxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = avaxtxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var avaxFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var avaxUsdFeeFail = (avaxFeeTotalFail * avaxtokenusd / 1e18)
      avaxToken = <div className="token-types"><AVAX_ICON height={"20px"} width={"20px"}/></div>
    } else {
      avaxOut = 0;
      avaxOutFail = 0;
      avaxUsdFeeFail = 0;
    };
    if (arbiOut > 0) {
      var gasUsed = arbitxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = arbitxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var arbiGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = arbitxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = arbitxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var arbiFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var arbiUsdFeeFail = (arbiFeeTotalFail * arbitokenusd / 1e18)
      arbiToken = <div className="token-types"><ARBI_ICON height={"20px"} width={"20px"}/></div>
    } else {
      arbiOut = 0;
      arbiOutFail = 0;
      arbiUsdFeeFail = 0;
    };
    if (xdaiOut > 0) {
      var gasUsed = xdaitxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = xdaitxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var xdaiGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = xdaitxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = xdaitxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var xdaiFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var xdaiUsdFeeFail = (xdaiFeeTotalFail * xdaitokenusd / 1e18)
      xdaiToken = <div className="token-types"><GNOSIS_ICON height={"20px"} width={"20px"}/></div>
    } else {
      xdaiOut = 0;
      xdaiOutFail = 0;
      xdaiUsdFeeFail = 0;
    };
    if (ftmOut > 0) {
      var gasUsed = ftmtxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = ftmtxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var ftmGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = ftmtxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = ftmtxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var ftmFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var ftmUsdFeeFail = (ftmFeeTotalFail * ftmtokenusd / 1e18);
      ftmToken = <div className="token-types"><FTM_ICON height={"20px"} width={"20px"}/></div>
    } else {
      ftmOut = 0;
      ftmOutFail = 0;
      ftmUsdFeeFail = 0;
    };
    if (oneOut > 0) {
      let gasUsed = onetxsOut.map((value) => value.hash);
      console.log("txnN is", gasUsed);

      const gasUsedArr = async () => {
        return Promise.all(
          gasUsed.map(async (item, index, array) => {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
              jsonrpc: "2.0",
              id: 1,
              method: "hmyv2_getTransactionReceipt",
              params: [item]
            });

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow"
            };

            const gasResponse = await fetch(
              APIurl,
              requestOptions
            );

            let result = await gasResponse.json([]);
            let gUsed = await result.result.gasUsed;
            return gUsed;
          })
        );
      };

      gasUsed = await gasUsedArr();
      console.log("gasUsed is", gasUsed);

      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a, 0);
      var gasPrice = onetxsOut.map((value) => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasPriceTotal = gasPrice.reduce((partial_sum, a) => partial_sum + a, 0);
      var gasFee = multiply(gasPrice, gasUsed);
      var oneGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a, 0);
      var gasUsedFail = onetxsOutFail.map((value) => parseInt(value.gasUsed));
      var gasPriceFail = onetxsOutFail.map((value) => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var oneFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a, 0);
      var oneUsdFeeFail = (oneFeeTotalFail * onetokenusd / 1e18)
      oneToken = <div className="token-types"><ONE_ICON height={"20px"} width={"20px"}/></div>
    } else {
      oneOut = 0;
      oneOutFail = 0;
      oneUsdFeeFail = 0;
    };
    if (movrOut > 0) {
      var gasUsed = movrtxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = movrtxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var movrGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = movrtxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = movrtxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var movrFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var movrUsdFeeFail = (movrFeeTotalFail * movrtokenusd / 1e18);
      movrToken = <div className="token-types"><MOVR_ICON height={"20px"} width={"20px"}/></div>

    } else {
      movrOut = 0;
      movrOutFail = 0;
      movrUsdFeeFail = 0;
    };
    if (celoOut > 0) {
      var gasUsed = celotxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = celotxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var celoGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = celotxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = celotxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var celoFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var celoUsdFeeFail = (celoFeeTotalFail * celotokenusd / 1e18);
      celoToken = <div className="token-types"><CELO_ICON height={"20px"} width={"20px"}/></div>

    } else {
      celoOut = 0;
      celoOutFail = 0;
      celoUsdFeeFail = 0;
    };
    if (auroraOut > 0) {
      var gasUsed = auroratxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = auroratxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var auroraGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 

      var gasUsedFail = auroratxsOutFail.map(value => parseInt(value.gasUsed));
      var gasPriceFail = auroratxsOutFail.map(value => parseInt(value.gasPrice));
      var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
      var auroraFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      var auroraUsdFeeFail = (auroraFeeTotalFail * celotokenusd / 1e18);
      auroraToken = <div className="token-types"><AURORA_ICON height={"20px"} width={"20px"}/></div>

    } else {
      auroraOut = 0;
      auroraOutFail = 0;
      auroraUsdFeeFail = 0;
    };


    if (evmChainId !== "0x63564c40") {

      let key = chainConfig[evmChainId].key
      let u = chainConfig[evmChainId].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc`
  
      if (chainConfig[evmChainId].key) { u += `&apikey=${key}` }
  
      let response = await fetch(u);
      console.log("u is", response);
  
  
      if (response.ok) { // if HTTP-status is 200-299
        var json = await response.json();
      } else {
        console.error("HTTP-Error: " + response.status);
      }
  
      let txs = json['result'];
      let n = txs.length;
      let from, txs2;
  
  
      while (n===10000) {
        from = txs[txs.length - 1].blockNumber
        u = chainConfig[evmChainId].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${from}&endblock=99999999&sort=asc&apikey=${key}`
        response = await fetch(u)
  
        if (response.ok) { // if HTTP-status is 200-299
            json = await response.json();
        } else {
            console.log('big pwoblam : ' + response.status);
            break
        }
  
        txs2 = json['result']
        n = txs2.length
        txs.push.apply(txs, txs2)
      }
  
      let txsOut = $.grep(txs, function(v) {
        return v.from === address.toLowerCase();
      });
  
      txsOut = txsOut.map(({ confirmations, ...item }) => item);
      txsOut = new Set(txsOut.map(JSON.stringify));
      txsOut = Array.from(txsOut).map(JSON.parse);
  
      var nOut = txsOut.length;
      var txsOutFail = $.grep(txsOut, function(v) {
          return v.isError === '1';
      });
  
      var nOutFail = txsOutFail.length;
  
      if (nOut > 0) {
        var gasUsed = txsOut.map(value => parseInt(value.gasUsed));
        setGasData(gasUsed);
        var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
        var gasPrice = txsOut.map(value => parseInt(value.gasPrice));
        var gasPriceMin = Math.min(...gasPrice);
        var gasPriceMax = Math.max(...gasPrice);
        var gasFee = multiply(gasPrice, gasUsed);
        var gasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
        var gasPriceTotal = gasPrice.reduce((partial_sum, a) => partial_sum + a,0);
        var gasUsedFail = txsOutFail.map(value => parseInt(value.gasUsed));
        var gasPriceFail = txsOutFail.map(value => parseInt(value.gasPrice));
        var gasFeeFail = multiply(gasPriceFail, gasUsedFail);
        var gasFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0);
      } else {
        // set display value to nothing
      }

      setNativeGasFeeTotal(chainConfig[evmChainId].token + comma((gasFeeTotal / 1e18).toFixed(3)));
      setUsdGasFeeTotal("$" + comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
      setSentNumTransactions((nOut));
          // setGweiTotal(comma(formatter(gasUsedTotal)));
      setAvarageGweiTotal(comma((gasPriceTotal / nOut / 1e9).toFixed(1)));
      setFailedNumTransactions(comma(nOutFail));
      setUsdFailedTotal(chainConfig[evmChainId].token + (gasFeeTotalFail / 1e18).toFixed(3));
  

    } else {

      setNativeGasFeeTotal("ONE" + comma((oneGasFeeTotal / 1e18).toFixed(3)));
      setUsdGasFeeTotal("$" + comma(formatter(((onetokenusd * oneGasFeeTotal) / 1e18).toFixed(4))));
      setSentNumTransactions((oneOut));
      // setGweiTotal(comma(formatter(gasUsedTotal)));
      setAvarageGweiTotal(comma((gasPriceTotal / oneOut / 1e9).toFixed(1)));
      setFailedNumTransactions(comma(oneOutFail));
      setUsdFailedTotal("ONE" + (oneFeeTotalFail / 1e18).toFixed(3));
      console.log("oneGasFeeTotal is ", oneGasFeeTotal)
    }

    

    setTotalSentTransactions(+eOut + +bscOut + +opOut + +maticOut + +avaxOut + +arbiOut + +ftmOut + +oneOut + +movrOut + +celoOut + +xdaiOut + +auroraOut);
    setTotalFailedNumTransactions(+eOutFail + +bscOutFail + +opOutFail + +maticOutFail + +avaxOutFail + +arbiOutFail + +ftmOutFail + +oneOutFail + +movrOutFail + +celoOutFail + +xdaiOutFail + +auroraOutFail);
    setTotalUsdFailedTotal(+eUsdFeeFail + +bscUsdFeeFail + +opUsdFeeFail + +maticUsdFeeFail + +avaxUsdFeeFail + +arbiUsdFeeFail + +ftmUsdFeeFail + +oneUsdFeeFail + +movrUsdFeeFail + +celoUsdFeeFail + +xdaiUsdFeeFail + +auroraUsdFeeFail);
    setPaidTokenTypes([ethToken, bnbToken,  opToken, maticToken, avaxToken, arbiToken, ftmToken, oneToken, movrToken, celoToken, xdaiToken, auroraToken]);

    setNormalGasUsd("$" + comma(formatter((tokenusd * standardgas * 65000 / 1e9).toFixed(2))));
    setFastGasUsd("$" + comma(formatter((tokenusd * fastgas * 65000 / 1e9).toFixed(2))));
    setInstantGasUsd("$" + comma(formatter((tokenusd * instantgas * 65000 / 1e9).toFixed(2))));
    


    //  <<<<-------------------------------------------------------
    setEthUsd(ethGasFeeTotal === undefined ? 0 : ((ethtokenusd * ethGasFeeTotal / 1e18).toFixed(3)));
    setBscUsd(bscGasFeeTotal === undefined ? 0 : (formatter((bsctokenusd * bscGasFeeTotal / 1e18).toFixed(3))));
    setOpUsd(opGasFeeTotal === undefined ? 0 : (formatter((optokenusd * opGasFeeTotal / 1e18).toFixed(3))));
    setMaticUsd(maticGasFeeTotal === undefined ? 0 : (formatter((matictokenusd * maticGasFeeTotal / 1e18).toFixed(3))));
    setAvaxUsd(avaxGasFeeTotal === undefined ? 0 : (formatter((avaxtokenusd * avaxGasFeeTotal / 1e18).toFixed(3))));
    setArbiUsd(arbiGasFeeTotal === undefined ? 0 : (formatter((arbitokenusd * arbiGasFeeTotal / 1e18).toFixed(3))));
    setFtmUsd(ftmGasFeeTotal === undefined ? 0 : (formatter((ftmtokenusd * ftmGasFeeTotal / 1e18).toFixed(3))));
    setOneUsd(oneGasFeeTotal === undefined ? 0 : (formatter(((onetokenusd * oneGasFeeTotal) / 1e18).toFixed(3))));
    setXdaiUsd(xdaiGasFeeTotal === undefined ? 0 : (formatter(((xdaitokenusd * xdaiGasFeeTotal) / 1e18).toFixed(3))));
    setCeloUsd(celoGasFeeTotal === undefined ? 0 : (formatter(((celotokenusd * celoGasFeeTotal) / 1e18).toFixed(3))));
    setMovrUsd(movrGasFeeTotal === undefined ? 0 : (formatter((movrtokenusd * movrGasFeeTotal / 1e18).toFixed(3))));
    setAuroraUsd(auroraGasFeeTotal === undefined ? 0 : (formatter((auroratokenusd * auroraGasFeeTotal / 1e18).toFixed(3))));
    
}


const totalPaidTokenTypes = (<li className="fee-tokens">{[solToken, paidTokenTypes]}</li>);
const totalGasFeeTotal = (+ethUsd + +bscUsd + +opUsd + +maticUsd + +avaxUsd + +ftmUsd + +arbiUsd + +oneUsd + +movrUsd + +celoUsd + +xdaiUsd + +auroraUsd + +solUsd).toFixed(2);
const totalSentTotal = (totalSentTransactions + +totalSentSol);
const totalFailedNumTotal = (totalFailedNumTransactions + +totalFailedSol);
const totalFailedCostTotal = ("$" + (totalUsdFailedTotal + +totalUsdFailedSol).toFixed(4));


useEffect(() => {
  if (evmChainId !== undefined) {
      getEvmTransactions(address);
      console.log("getEvmTransactions was called")
  } else {
    console.log("no chainID has arrived")
  }
  return () => {
    
  }
}, [props.recentAccount.activeChain]);

useEffect(() => {
  if (terraAddress !== undefined) {
    getTerraTransactions(terraAddress);
    console.log("getTerraTransactions was called")
  } else {
    console.log("no chainID has arrived")
  }
  return () => {
    
  }
}, [props.recentAccount.terraAccount]);

useEffect(() => {
  if (solAddress !== undefined) {
    getSolTransactions(solAddress);
    console.log("getSolTransactions was called")
  } else {
    console.log("no chainID has arrived")
  }
  return () => {
    
  }
}, [props.recentAccount.solAccount]);
  

  return (
    <div className="panels-container">
      <div className="left-panel">
          <div className="allConnectedChains-page">
            <DoughnutChart
              setEth={ethUsd}
              setOp={opUsd}
              setBsc={bscUsd}
              setMatic={maticUsd}
              setArbi={arbiUsd}
              setXdai={xdaiUsd}
              setAvax={avaxUsd}
              setFtm={ftmUsd}
              setCelo={celoUsd}
              setOne={oneUsd}
              setMovr={movrUsd}
              setAurora={auroraUsd}
              setSol={solUsd}
              setReth={rEthUsd}
              />
            <div className="about-chain">
              Net history
            </div>
          </div>
          <div className="usage-panels">
            <div className="small-panel">paid fee token types: <p className="small-panel-feed"></p>{totalPaidTokenTypes}</div>
            <div className="small-panel">total spent on gas: <p className="small-panel-feed">{("$" + comma(totalGasFeeTotal))}</p></div>
            <div className="small-panel">total transactions made: <p className="small-panel-feed">{totalSentTotal}</p></div>
            <div className="small-panel">avarage transaction cost: <p className="small-panel-feed">{avarageGweiTotal}</p></div>
            <div className="small-panel">total transactions failed: <p className="small-panel-feed">{totalFailedNumTotal}</p></div>
            <div className="small-panel">failed cost: <p className="small-panel-feed">{totalFailedCostTotal}</p></div>
            <div className="small-panel">gas prices: <p className="small-panel-feed"></p></div>
            <div className="small-panel">most recent address: <p >{props.recentAccount.newAddress}</p> </div>
          </div>
      </div>

      <div className="right-panel">
        <div className="chainSpecific-page">
          <LineChart 
            setPoint={sentNumTransactions}
            setGasData={gasData}/>
          <Routes>
          <Route path="ethereum" element={<Ethereum />} />
          <Route path="binance" element={<BSC />} />
          <Route path="xdai" element={<Xdai />} />
          <Route path="polygon" element={<Polygon />} />
          <Route path="fantom" element={<Fantom />} />
          <Route path="optimism" element={<Optimism/>} />
          <Route path="arbitrum" element={<Arbitrum />} />
          <Route path="avalanche" element={<Avalanche />} />
          <Route path="celo" element={<Celo />} />
          <Route path="harmony" element={<Harmony />} />
          <Route path="cosmos" element={<Cosmos />} />
          <Route path="solana" element={<Solana />} />
          <Route path="terra" element={<Terra />} />
          <Route path="cardano" element={<Cardano />} />
          <Route path="polkadot" element={<Polkadot />} />
          <Route path="waves" element={<Waves />} />
          <Route path="algo" element={<Algorand />} />
          <Route path="moonriver" element={<Moonriver />} />
          <Route path="aurora" element={<Aurora />} />
          <Route 
              path="home" 
              exact
              element={
              <Home />
              }
          />
          </Routes>
        </div>
        <div className="usage-panels">
          <div className="live-gas-panel">
            <div className="small-gas">normal: 🐌 <div className="small-gas-feed"><div className="normal-gas">{normalGas}</div><div className="usd-gas">{normalGasUsd}</div></div> </div>
            <div className="small-gas">fast: 🏎️ <div className="small-gas-feed"><div className="fast-gas">{fastGas}</div><div className="usd-gas">{fastGasUsd}</div></div></div>
            <div className="small-gas">instant: 🚀 <div className="small-gas-feed"><div className="instant-gas">{instantGas}</div><div className="usd-gas">{instantGasUsd}</div></div> </div>
          </div>
        <div className="small-panel">spent in native token: <p className="small-panel-feed">{nativeGasFeeTotal}</p></div>
        <div className="small-panel">spent on gas: <p className="small-panel-feed">{usdGasFeeTotal}</p></div>
        <div className="small-panel">transactions made: <p className="small-panel-feed">{sentNumTransactions}</p></div>
        <div className="small-panel">avarage transaction cost: <p className="small-panel-feed">{avarageGweiTotal}</p></div>
        <div className="small-panel">transactions failed: <p className="small-panel-feed">{failedNumTransactions}</p></div>
        <div className="small-panel">failed cost: <p className="small-panel-feed">{usdFailedTotal}</p></div>
        </div>
      </div>
    </div>
  );
}



