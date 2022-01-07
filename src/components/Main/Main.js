import './main.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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

import Home from '../Home/Home';
import Sub from '../Sub/Sub';
import Sub1 from '../Sub/Sub1';
import LineChart from '../Charts/LineChart';

export const ETHERSCAN_KEY = "KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD";
export const OPTISCAN_KEY = "84EIKB5YSF17UHZK2778T1HM3Q8DPN6F29";
export const BSCSCAN_KEY = "UWB7YUCVQXT7TGFK41TNJSJBIHDQ1JGU9D";
export const POLYGONSCAN_KEY = "QDPWKASEUSSYTKX9ZVMSSQGX4PTCZGHNC8";
export const SNOWTRACE_KEY = "78X9UB1WYTRQQ9Q2G53TR6XQ8P662BDVVK";
export const FTMSCAN_KEY = "B5UU3GDR3VJYVXFYT6RPK5RA6I8J5CV6B3";
export const MOONSCAN_KEY = "54HHCHQRAEXBCTS2ZVTSJ991Q34MDB2CRD";
export const ARBISCAN_KEY = "3S4P8WRXX34R5DVCCRG3GECVF5SFV5U3QW";


export default function Main(props) {
  const [gasSpent, setGasSpent] = useState()
  


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

  const [balanceTotal, setBalanceTotal] = useState(0);
  const [nativeGasFeeTotal, setNativeGasFeeTotal] = useState(0);
  const [usdGasFeeTotal, setUsdGasFeeTotal] = useState(0);
  const [gweiTotal, setGweiTotal] = useState(0);
  const [sentNumTransactions, setSentNumTransactions] = useState(0);
  const [avarageGweiTotal, setAvarageGweiTotal] = useState(0);
  const [failedNumTransactions, setFailedNumTransactions] = useState(0);
  const [usdFailedTotal, setUsdFailedTotal] = useState("nothing");

  let address = props.recentAccount.newAccount;
  let chainId = props.recentAccount.activeChain;

  const [ethUsd, setEthUsd] = useState();
  const [opUsd, setOpUsd] = useState();
  const [bscUsd, setBscUsd] = useState();
  const [maticUsd, setMaticUsd] = useState();
  const [arbiUsd, setArbiUsd] = useState();
  const [xdaiUsd, setXdaiUsd] = useState();
  const [avaxUsd, setAvaxUsd] = useState();
  const [ftmUsd, setFtmUsd] = useState();
  const [celoUsd, setCeloUsd] = useState();
  const [oneUsd, setOneUsd] = useState();
  const [movrUsd, setMovrUsd] = useState();
  const [auroraUsd, setAuroraUsd] = useState();
  const [rEthUsd, setRethUsd] = useState();

  
  const getTransactions = async(address) => {
    const chainConfig = [{}]

    chainConfig['0x1'] = {id: '0x1', shortname: 'eth', name:'Ethereum', symbol: 'eth', coingecko_name: 'ethereum', token: 'Ξ', color: '#582a2a', explorer_uri: 'https://api.etherscan.io', key: `${ETHERSCAN_KEY}`}
    chainConfig['0x38'] = {id: '0x38', shortname: 'bsc', name:'Binance Smart Chain', symbol: 'bnb', coingecko_name: 'binancecoin', token: 'Ḇ', color: "#f4ce03", explorer_uri: 'https://api.bscscan.com', key: `${BSCSCAN_KEY}`}
    chainConfig['0x64'] = {id: '0x64', shortname: 'xdai', name:'xDai', symbol: 'xdai', coingecko_name: 'xdai', token: 'Ẍ', color: '#48a9a6', explorer_uri: 'https://blockscout.com/xdai/mainnet', key: ''}
    chainConfig['0x89'] = {id: '0x89', shortname: 'matic', name:'Polygon', symbol: 'matic', coingecko_name: 'matic-network', token: 'M̃', color: '#9d03f4', explorer_uri: 'https://api.polygonscan.com', key: `${POLYGONSCAN_KEY}`}
    chainConfig['0xfa'] = {id: '0xfa', shortname: 'ftm', name:'Fantom', symbol: 'ftm', coingecko_name: 'fantom', token: 'ƒ', color: '#00dbff', explorer_uri: 'https://api.ftmscan.com', key: `${FTMSCAN_KEY}`}
    chainConfig['0xa86a'] = {id: '0xa86a', shortname: 'avax', name:'Avalanche', symbol: 'avax', coingecko_name: 'avalanche-2', token: 'Ã', color: '#ec1616', explorer_uri: 'https://api.snowtrace.io', key: `${SNOWTRACE_KEY}`}
    chainConfig['0x63564c40'] = {id: '0x63564c40', shortname: 'one', name:'Harmoney One', symbol: 'one', coingecko_name: 'harmony', token: 'Ã', color: '#ec1616', explorer_uri: 'https://api.harmony.one', key: ''}
    chainConfig['0xa4ec'] = {id: '0xa4ec', shortname: 'celo', name:'Celo', symbol: 'celo', coingecko_name: 'celo', token: 'C', color: '#ec1616', explorer_uri: 'https://api.snowtrace.io', key: ''}
    chainConfig['0xa4b1'] = {id: '0xa4b1', shortname: 'arbi', name:'Arbitrum', symbol: 'aeth', coingecko_name: 'ethereum', token: 'aΞ', color: '#ec1616', explorer_uri: 'https://api.arbiscan.io', key: `${ARBISCAN_KEY}`}
    chainConfig['0x505'] = {id: '0x505', shortname: 'movr', name:'Moonriver', symbol: 'movr', coingecko_name: 'moonriver', token: 'M', color: '#ec1690', explorer_uri: 'https://api-moonriver.moonscan.io', key: `${MOONSCAN_KEY}`}
    chainConfig['0x4e45152'] = {id: '0x4e45152', shortname: 'aurora', name:'Aurora', symbol: 'oeth', coingecko_name: 'ethereum', token: 'oΞ', color: '#ec1616', explorer_uri: 'https://api.optimistic.etherscan.io', key: '84EIKB5YSF17UHZK2778T1HM3Q8DPN6F29'}
    chainConfig['0xa'] = {id: '0xa', shortname: 'op', name:'Optimism', symbol: 'oeth', coingecko_name: 'ethereum', token: 'oΞ', color: '#ec8816', explorer_uri: 'https://api-optimistic.etherscan.io', key: `${OPTISCAN_KEY}`}
    // chainConfig['0xa'] = {id: '0xa', shortname: 'op', name:'Optimism', symbol: 'oeth', coingecko_name: 'opEthereum', token: 'oΞ', color: '#ec1616', explorer_uri: 'https://api.optimistic.etherscan.io', key: '84EIKB5YSF17UHZK2778T1HM3Q8DPN6F29'}

    //testnets
    chainConfig['0x4'] = {id: '0x4', shortname: 'eth', name:'Rinkeby', symbol: 'eth', coingecko_name: 'ethereum', token: 'Ξ', color: '#03a9f4', explorer_uri: 'https://api-rinkeby.etherscan.io', key: 'KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD'}

    const chainId = props.recentAccount.activeChain;
    console.log(chainId);
    
    let coingeckoSymbol = chainConfig[chainId].coingecko_name;
    let tokenusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids='+coingeckoSymbol+'&vs_currencies=usd')
    .then(response => {return response.json()})
    .catch(err => {
      console.log('Error', err);
    })

    tokenusd = tokenusd[coingeckoSymbol].usd;
    console.log(chainConfig[chainId].symbol.toUpperCase()+' USD: $' + tokenusd);

    let key = chainConfig[chainId].key
    let u = chainConfig[chainId].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc`

    if (chainConfig[chainId].key) { u += `&apikey=${key}` }

    let response = await fetch(u);


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
      u = chainConfig[chainId].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${from}&endblock=99999999&sort=asc&apikey=${key}`
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

    console.log("u is ", u)
    let txsOut = $.grep(txs, function(v) {
      return v.from === address.toLowerCase();
    });

    txsOut = txsOut.map(({ confirmations, ...item }) => item);
    txsOut = new Set(txsOut.map(JSON.stringify));
    txsOut = Array.from(txsOut).map(JSON.parse);
        // remove duplicates
        //localStorage.setItem('txsOut', JSON.stringify(txsOut));
    console.log('All outgoing txs:', txsOut)

    var nOut = txsOut.length;
    $('#nOut').text(comma(nOut));
    var txsOutFail = $.grep(txsOut, function(v) {
        return v.isError === '1';
    });

    var nOutFail = txsOutFail.length;
    $('#nOutFail').text(comma(nOutFail));
    console.log('Failed outgoing txs:', txsOutFail);

    if (nOut > 0) {
      var gasUsed = txsOut.map(value => parseInt(value.gasUsed));
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

      $('#gasUsedTotal').text(comma(formatter(gasUsedTotal)));
      $('#gasPricePerTx').text(comma((gasPriceTotal / nOut / 1e9).toFixed(1)));
      $('#gasPricePerTx').hover(function() {
          $(this).css('cursor', 'help').attr('title', 'Min: ' + (gasPriceMin / 1e9).toFixed(3) + '; Max: ' + (gasPriceMax / 1e9).toFixed(3));
          // Tipped.create('#gasPricePerTx', 'Min: ' + (gasPriceMin / 1e9).toFixed(1) + '; Max: ' + (gasPriceMax / 1e9).toFixed(1), { offset: { y: 20 } });
      }, function() {
          $(this).css('cursor', 'auto');
      });
      $('#gasFeeTotal').text(chainConfig[chainId].token + comma((gasFeeTotal / 1e18).toFixed(3)));
      
      if (nOutFail > 0) {
          $('#gasFeeTotalFail').html(chainConfig[chainId].token + (gasFeeTotalFail / 1e18).toFixed(3));
          var oof = Math.max(...gasFeeFail)/1e18;

          if (oof > 0.1) {
              var i = gasFeeFail.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
              var tx = txsOutFail[i];
              $('<p><a id="oof" href="https://bscscan.com/tx/' + 
              tx.hash + '">This one</a> cost <span id="oofCost">' + chainConfig[chainId].token +
              (gasFeeFail[i]/1e18).toFixed(3) + '</span>.</p>').insertBefore($('#tipsy'))
          }
      }  else {
          $('#gasFeeTotalFail').html('nothing');
      }

      if (tokenusd !== null) {
          $('#tokenusd').text('$' + comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
          $('#oofCost').append(' ($' + comma(formatter((tokenusd * gasFeeFail[i] / 1e18).toFixed(2))) + ')');
      }
    } else {
      $('#gasUsedTotal').text(0);
      $('#gasFeeTotal').text(chainConfig[chainId].token + 0); 
    }





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
    let eth = chainConfig["0x1"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`
    let op = chainConfig["0xa"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=84EIKB5YSF17UHZK2778T1HM3Q8DPN6F29`
    let bsc = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=UWB7YUCVQXT7TGFK41TNJSJBIHDQ1JGU9D`
    let matic = chainConfig["0x89"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=QDPWKASEUSSYTKX9ZVMSSQGX4PTCZGHNC8`
    let avax = chainConfig["0xa86a"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=78X9UB1WYTRQQ9Q2G53TR6XQ8P662BDVVK`
    let ftm = chainConfig["0xfa"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=B5UU3GDR3VJYVXFYT6RPK5RA6I8J5CV6B3`
    let movr = chainConfig["0x505"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=54HHCHQRAEXBCTS2ZVTSJ991Q34MDB2CRD`
    let arbi = chainConfig["0xa4b1"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=3S4P8WRXX34R5DVCCRG3GECVF5SFV5U3QW`
    // let xdai = chainConfig["0x64"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=`
    // let celo = chainConfig["0xa4ec"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=`
    // let one = chainConfig["0x63564c40"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=`
    // let aurora = chainConfig["0x4e45152"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=`
    // let reth = chainConfig["0x4"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`


    console.log("eth is ", eth)

    let responseEth = await fetch(eth);
    let responseOp = await fetch(op);
    let responseBsc = await fetch(bsc);
    let responseMatic = await fetch(matic);
    let responseAvax = await fetch(avax);
    let responseFtm = await fetch(ftm);
    let responseMovr = await fetch(movr);
    let responseArbi = await fetch(arbi);
    // let responseXdai = await fetch(xdai);
    // let responseCelo = await fetch(celo);
    // let responseOne = await fetch(one);
    // let responseAurora = await fetch(aurora);
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
    // if (responseXdai.ok) {var xdaijson = await responseXdai.json();} else {console.error("HTTP-Error: " + responseXdai.status);}
    // if (responseCelo.ok) {var celojson = await responseCelo.json();} else {console.error("HTTP-Error: " + responseCelo.status);}
    // if (responseOne.ok) {var onejson = await responseOne.json();} else {console.error("HTTP-Error: " + responseOne.status);}
    // if (responseAurora.ok) {var aurorajson = await responseAuror.json();} else {console.error("HTTP-Error: " + responseAuror.status);}
    // if (responseReth.ok) {var rethjson = await responseReth.json();} else {console.error("HTTP-Error: " + responseReth.status);}


    //  <<<<-------------------------------------------------------
    let etxs = ejson['result'];
    let optxs = opjson['result'];
    let bsctxs = bscjson['result'];
    let matictxs = maticjson['result'];
    let avaxtxs = avaxjson['result'];
    let ftmtxs = ftmjson['result'];
    let movrtxs = movrjson['result'];
    let arbitxs = arbijson['result'];
    // let xdaitxs = xdaijson['result'];
    // let celotxs = celojson['result'];
    // let onetxs = onejson['result'];
    // let auroratxs = aurorajson['result'];
    // let rethtxs = rethjson['result'];

    let e = etxs.length;
    let opt = optxs.length;
    let bsct = bsctxs.length;
    let matict = matictxs.length;
    let avaxt = avaxtxs.length;
    let ftmt = ftmtxs.length;
    let movrt = movrtxs.length;
    let arbit = arbitxs.length;
    // let xdait = xdaitxs.length;
    // let celot = celotxs.length;
    // let onet = onetxs.length;
    // let aurorat = auroratxs.length;
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
      eth = chainConfig["0x1"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${efrom}&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`
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
      bsc = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${bscfrom}&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`
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
      op = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${opfrom}&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`
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
      matic = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${maticfrom}&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`
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
      avax = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${avaxfrom}&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`
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
      arbi = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${arbifrom}&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`
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
    while (ftmt===10000) {
      ftmfrom = ftmtxs[ftmtxs.length - 1].blockNumber
      ftm = chainConfig["0x38"].explorer_uri+`/api?module=account&action=txlist&address=${address}&startblock=${ftmfrom}&endblock=99999999&sort=asc&apikey=KKEHS5KMBY8KJSTBKUXRT9X33NZUNDPSHD`
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
    let ftmtxsOut = $.grep(ftmtxs, function(c) {
      return c.from === address.toLowerCase();
    });
    //  <<<<-------------------------------------------------------
    etxsOut = etxsOut.map(({ confirmations, ...item }) => item);
    bsctxsOut = bsctxsOut.map(({ confirmations, ...item }) => item);
    optxsOut = optxsOut.map(({ confirmations, ...item }) => item);
    matictxsOut = matictxsOut.map(({ confirmations, ...item }) => item);
    avaxtxsOut = avaxtxsOut.map(({ confirmations, ...item }) => item);
    arbitxsOut = arbitxsOut.map(({ confirmations, ...item }) => item);
    ftmtxsOut = ftmtxsOut.map(({ confirmations, ...item }) => item);

    etxsOut = new Set(etxsOut.map(JSON.stringify));
    bsctxsOut = new Set(bsctxsOut.map(JSON.stringify));
    optxsOut = new Set(optxsOut.map(JSON.stringify));
    matictxsOut = new Set(matictxsOut.map(JSON.stringify));
    avaxtxsOut = new Set(avaxtxsOut.map(JSON.stringify));
    arbitxsOut = new Set(arbitxsOut.map(JSON.stringify));
    ftmtxsOut = new Set(ftmtxsOut.map(JSON.stringify));

    etxsOut = Array.from(etxsOut).map(JSON.parse);
    bsctxsOut = Array.from(bsctxsOut).map(JSON.parse);
    optxsOut = Array.from(optxsOut).map(JSON.parse);
    matictxsOut = Array.from(matictxsOut).map(JSON.parse);
    avaxtxsOut = Array.from(avaxtxsOut).map(JSON.parse);
    arbitxsOut = Array.from(arbitxsOut).map(JSON.parse);
    ftmtxsOut = Array.from(ftmtxsOut).map(JSON.parse);

    console.log('All outgoing eth txs:', etxsOut)
    console.log('All outgoing bsc txs:', bsctxsOut)
    console.log('All outgoing op txs:', optxsOut)
    console.log('All outgoing matic txs:', matictxsOut)
    console.log('All outgoing avax txs:', avaxtxsOut)
    console.log('All outgoing arbi txs:', arbitxsOut)
    console.log('All outgoing ftm txs:', ftmtxsOut)
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
    var ftmOut = ftmtxsOut.length;
    var ftmtxsOutFail = $.grep(ftmtxsOut, function(c) {
        return c.isError === '1';
    });
    //  <<<<-------------------------------------------------------
    var eOutFail = etxsOutFail.length;
    $('#nOutFail').text(comma(eOutFail));
    console.log('Failed outgoing txs:', etxsOutFail);
    var bscOutFail = bsctxsOutFail.length;
    $('#nOutFail').text(comma(bscOutFail));
    console.log('Failed outgoing txs:', bsctxsOutFail);
    var opOutFail = optxsOutFail.length;
    $('#nOutFail').text(comma(opOutFail));
    console.log('Failed outgoing txs:', optxsOutFail);
    var maticOutFail = matictxsOutFail.length;
    $('#nOutFail').text(comma(maticOutFail));
    console.log('Failed outgoing txs:', matictxsOutFail);
    var avaxOutFail = avaxtxsOutFail.length;
    $('#nOutFail').text(comma(avaxOutFail));
    console.log('Failed outgoing txs:', avaxtxsOutFail);
    var arbiOutFail = arbitxsOutFail.length;
    $('#nOutFail').text(comma(arbiOutFail));
    console.log('Failed outgoing txs:', arbitxsOutFail);
    var ftmOutFail = ftmtxsOutFail.length;
    $('#nOutFail').text(comma(ftmOutFail));
    console.log('Failed outgoing txs:', ftmtxsOutFail);
        
    if (eOut > 0) {
      var gasUsed = etxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = etxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var ethGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
    } 
    if (bscOut > 0) {
      var gasUsed = bsctxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = bsctxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var bscGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
    } 
    if (opOut > 0) {
      var gasUsed = optxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = optxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var opGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
    } 
    if (maticOut > 0) {
      var gasUsed = matictxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = matictxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var maticGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
    } 
    if (avaxOut > 0) {
      var gasUsed = avaxtxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = avaxtxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var avaxGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
    } 
    if (arbiOut > 0) {
      var gasUsed = arbitxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = arbitxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var arbiGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
    } 
    if (ftmOut > 0) {
      var gasUsed = ftmtxsOut.map(value => parseInt(value.gasUsed));
      var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
      var gasPrice = ftmtxsOut.map(value => parseInt(value.gasPrice));
      var gasPriceMin = Math.min(...gasPrice);
      var gasPriceMax = Math.max(...gasPrice);
      var gasFee = multiply(gasPrice, gasUsed);
      var ftmGasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
    } 
        





    setNativeGasFeeTotal(chainConfig[chainId].token + comma((gasFeeTotal / 1e18).toFixed(3)));
    setUsdGasFeeTotal(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    setSentNumTransactions(comma(nOut));
        // setGweiTotal(comma(formatter(gasUsedTotal)));
    setAvarageGweiTotal(comma((gasPriceTotal / nOut / 1e9).toFixed(1)));
    setFailedNumTransactions(comma(nOutFail));
    setUsdFailedTotal(chainConfig[chainId].token + (gasFeeTotalFail / 1e18).toFixed(3));



    //  <<<<-------------------------------------------------------
    setEthUsd(comma(formatter((ethtokenusd * ethGasFeeTotal / 1e18).toFixed(2))));
    setBscUsd(comma(formatter((bsctokenusd * bscGasFeeTotal / 1e18).toFixed(2))));
    setOpUsd(comma(formatter((optokenusd * opGasFeeTotal / 1e18).toFixed(2))));
    setMaticUsd(comma(formatter((matictokenusd * maticGasFeeTotal / 1e18).toFixed(2))));
    setAvaxUsd(comma(formatter((avaxtokenusd * avaxGasFeeTotal / 1e18).toFixed(2))));
    setArbiUsd(comma(formatter((arbitokenusd * arbiGasFeeTotal / 1e18).toFixed(2))));
    setFtmUsd(comma(formatter((ftmtokenusd * ftmGasFeeTotal / 1e18).toFixed(2))));

    if (chainId === "0x1") {
      setEthUsd(comma(formatter((ethtokenusd * ethGasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0xa") {
      setOpUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0x38") {
      setBscUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0x89") {
      setMaticUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0xa4b1") {
      setArbiUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0x64") {
      setXdaiUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0xa86a") {
      setAvaxUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0xfa") {
      setFtmUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0xa4ec") {
      setCeloUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0x63564c40") {
      setOneUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0x505") {
      setMovrUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else if (chainId === "0x4e45152") {
      setAuroraUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));  
    } 

      else if (chainId === "0x4") {                         // testnets <<<<<<<<--------------------------------------------------
      setRethUsd(comma(formatter((tokenusd * gasFeeTotal / 1e18).toFixed(2))));
    } else {
      console.log("non EVM chain");
    }

    console.log('color::', chainConfig[chainId].color)
    console.log('jQ::', $('body span').css('color'))

    $('body span').css('color', chainConfig[chainId].color)

    console.log('jQ::', $('body span').css('color'))

}


useEffect(() => {
  if (address !== undefined) {
    // getTransactions(address);
    console.log('Getting transactions for ' + address);
  } else {
    console.log("address hasn't cum yet AAah")
  }
  return () => {
    
  }
}, [props.recentAccount.newAccount]);

useEffect(() => {
  if (chainId !== undefined) {
    getTransactions(address);
    console.log('Your most recent chainID is ' + chainId);
  } else {
    console.log("chainID hasn't cum either damnit")
  }
  return () => {
    
  }
}, [props.recentAccount.activeChain]);




  

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
          setReth={rEthUsd}
           />
        </div>
        <div className="usage-panels">
        <div className="small-panel">spent in native token: <p className="small-panel-feed">{nativeGasFeeTotal}</p></div>
        <div className="small-panel">spent on gas: <p className="small-panel-feed">$ {usdGasFeeTotal}</p></div>
        <div className="small-panel">transactions made: <p className="small-panel-feed">{sentNumTransactions}</p></div>
        <div className="small-panel">avarage transaction cost: <p className="small-panel-feed">{avarageGweiTotal}</p></div>
        <div className="small-panel">transactions failed: <p className="small-panel-feed">{failedNumTransactions}</p></div>
        <div className="small-panel">failed cost: <p className="small-panel-feed">{usdFailedTotal}</p></div>
        <div className="small-panel">number of connected addresses: <p className="small-panel-feed">{props.recentAccount.userBalance}eth</p></div>
        <div className="small-panel">most recent address: <p >{props.recentAccount.newAccount}</p> </div>
        </div>
        <h6 >
        <p>You've spent {nativeGasFeeTotal} on gas. Right now, that's $ {usdGasFeeTotal}.</p>
        <p>You used {gweiTotal} gas to send {sentNumTransactions} transactions, with an average price of {avarageGweiTotal} gwei. {failedNumTransactions} of them failed, costing you {usdFailedTotal}.</p>
        {/* <p>You've spent <span id="gasFeeTotal">&#x1F914</span> on gas. Right now, that's <span id="tokenusd">&#x1F914</span>.</p> */}
        {/* <p>You used <span id="gasUsedTotal">&#x1F914</span> gas to send <span id="nOut">&#x1F914</span> transactions, with an average price of  */}
        {/* <span id="gasPricePerTx">&#x1F914</span> gwei. <span id="nOutFail">&#x1F914</span> of them failed, costing you <span id="gasFeeTotalFail">&#x1F914</span>.</p> */}
        </h6>
      </div>

      <div className="right-panel">
        <div className="chainSpecific-page">
          <LineChart 
            setPoint={sentNumTransactions}/>
          <Routes>
          <Route path="/ethereum" element={<Ethereum />} />
          <Route path="/binance" element={<BSC />} />
          <Route path="/xdai" element={<Xdai />} />
          <Route path="/polygon" element={<Polygon />} />
          <Route path="/fantom" element={<Fantom />} />
          <Route path="/optimisum" element={<Optimism/>} />
          <Route path="/arbitrum" element={<Arbitrum />} />
          <Route path="/avalanche" element={<Avalanche />} />
          <Route path="/celo" element={<Celo />} />
          <Route path="/harmony" element={<Harmony />} />
          <Route path="/cosmos" element={<Cosmos />} />
          <Route path="/solana" element={<Solana />} />
          <Route path="/terra" element={<Terra />} />
          <Route path="/cardano" element={<Cardano />} />
          <Route path="/polkadot" element={<Polkadot />} />
          <Route path="/waves" element={<Waves />} />
          <Route path="/algo" element={<Algorand />} />
          <Route 
              path="/home" 
              exact
              element={
              <Home time={new Date() - 50000000} >
                <Sub />
                <Sub1 />
              </Home>
              }
          />
          </Routes>
        </div>
          {/* <div className="chainFee-explanation">
          0xb789adbb6143038c5048fbf4f410c7e69c6fced6
          </div> */}
      </div>
    </div>
  );
}



