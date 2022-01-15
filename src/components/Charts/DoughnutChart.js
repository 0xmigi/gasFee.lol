import './charts.css';
import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';


const DoughnutChart = (props) => {
  const [chartData, setChartData] = useState({});
  const [ethGasFees, setEthGasFees] = useState({});
  const [bscGasFees, setBscGasFees] = useState({});
  const [maticGasFees, setMaticGasFees] = useState({});
  const [opGasFees, setOpGasFees] = useState({});
  const [arbiGasFees, setArbiGasFees] = useState({});
  const [xdaiGasFees, setXdaiGasFees] = useState({});
  const [avaxGasFees, setAvaxGasFees] = useState({});
  const [ftmGasFees, setFtmGasFees] = useState({});
  const [celoGasFees, setCeloGasFees] = useState({});
  const [oneGasFees, setOneGasFees] = useState({});
  const [movrGasFees, setMovrGasFees] = useState({});
  const [auroraGasFees, setAuroraGasFees] = useState({});
  const [atomGasFees, setAtomGasFees] = useState({});
  const [solGasFees, setSolGasFees] = useState({});
  const [lunaGasFees, setLunaGasFees] = useState({});
  const [adaGasFees, setAdaGasFees] = useState({});
  const [dotGasFees, setDotGasFees] = useState({});
  const [wavesGasFees, setWavesGasFees] = useState({});
  const [algoGasFees, setAlgoGasFees] = useState({});
  
  // testnets <<<<<<----------
  const [rethGasFees, setRethGasFees] = useState({});

  
  

  useEffect(() => {
    setEthGasFees(props.setEth);
    setBscGasFees(props.setBsc);
    setMaticGasFees(props.setMatic);
    setOpGasFees(props.setOp);
    setArbiGasFees(props.setArbi);
    setXdaiGasFees(props.setXdai);
    setAvaxGasFees(props.setAvax);
    setFtmGasFees(props.setFtm);
    setCeloGasFees(props.setCelo);
    setOneGasFees(props.setOne);
    setMovrGasFees(props.setMovr);
    setAuroraGasFees(props.setAurora);

    setRethGasFees(props.setReth);

    return () => {
      // console.log("gas fee data recieved", props.setEth);
    }
  })


  const data = () => {
    setChartData({
      type: 'doughnut',
      labels: ['Ethereum', 'BSC', 'Polygon', 'Optimism', 'Arbitrum', 'xDai', 'Avalanche', 'Fantom', 'Celo', 'Harmony One', 'Moonriver', 'Aurora', 'Cosmos', 'Solana', 'Luna', 'Cardano', 'Polkadot', 'Waves', 'Algorand'],
      datasets: [{
        label: '$ gas spent',
        data: [(ethGasFees), (bscGasFees), (maticGasFees), (opGasFees), (arbiGasFees), (xdaiGasFees), (avaxGasFees), (ftmGasFees), (celoGasFees), (oneGasFees), (movrGasFees), (auroraGasFees), (rethGasFees), (atomGasFees), (solGasFees), (lunaGasFees), (adaGasFees)],
        backgroundColor: [
          '#582a2a',
          '#6f3832',
          '#864838',
          '#9b5a3e',
          '#b06d43',
          '#c28147',
          '#d3974b',
          '#e1ae51',
          '#ecc758',
          '#f5e061',
          '#fafa6e',
          '#aae479',
          '#64c987',
          '#23aa8f',
          '#00898a',
          '#176877',
          '#2a4858',
          '#213c5d',
          '#322a58',
        ],
        borderWidth: 0.5,
        borderColor: [
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
          '#141414',
        ],
    }],
    })
  }

  useEffect(() => {
    data()
  }, [ethGasFees, bscGasFees, maticGasFees, opGasFees, arbiGasFees, xdaiGasFees, avaxGasFees, ftmGasFees, celoGasFees, oneGasFees, movrGasFees, auroraGasFees, rethGasFees, atomGasFees, solGasFees, lunaGasFees, adaGasFees])


  return (
    <div className="d-nut-chart">
      <Doughnut
        data={chartData}
        options={{
          resopnsive: true,
          hoverOffset: 4,
          legend: {
            // onHover: handleHover,
            // onLeave: handleLeave,
            position: 'left',
            align: 'start',
            labels: {
              fontColor: "white"
            }
          }
        }}
      />
    </div>
  );
}

export default DoughnutChart;