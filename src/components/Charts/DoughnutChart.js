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
  const [metisGasFees, setMetisGasFees] = useState({});
  const [bobaGasFees, setBobaGasFees] = useState({});
  const [glmrGasFees, setGlmrGasFees] = useState({});
  const [hecoGasFees, setHecoGasFees] = useState({});
  const [croGasFees, setCroGasFees] = useState({});
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
    setMetisGasFees(props.setMetis);
    setBobaGasFees(props.setBoba);
    setGlmrGasFees(props.setGlmr);
    setHecoGasFees(props.setHeco);
    setSolGasFees(props.setSol);
    setCroGasFees(props.setCro);

    setRethGasFees(props.setReth);

    return () => {
    }
  })


  const data = () => {
    setChartData({
      type: 'doughnut',
      labels: ['Ethereum', 'BSC', 'Polygon', 'Optimism', 'Arbitrum', 'xDai', 'Avalanche', 'Fantom', 'Celo', 'Harmony One', 'Moonriver', 'Aurora', 'Metis', 'Boba', 'Moonbeam', 'Heco', 'Cronos', 'Cosmos', 'Solana', 'Luna', 'Polkadot'
              // , 'Waves', 'Algorand'
              ],
      datasets: [{
        label: '$ gas spent',
        data: [(ethGasFees), (bscGasFees), (maticGasFees), (opGasFees), (arbiGasFees), (xdaiGasFees), (avaxGasFees), (ftmGasFees), (celoGasFees), (oneGasFees), (movrGasFees), (auroraGasFees), (metisGasFees), (bobaGasFees), (glmrGasFees), (hecoGasFees), (croGasFees), (atomGasFees), (solGasFees), (lunaGasFees), (dotGasFees)],
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
          '#007d8b',
          // '#00708a',
          '#006286',
          '#00557f',
          '#114775',
          '#273968',
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
  }, [ethGasFees, bscGasFees, maticGasFees, opGasFees, arbiGasFees, xdaiGasFees, avaxGasFees, bobaGasFees, glmrGasFees, ftmGasFees, celoGasFees, oneGasFees, movrGasFees, auroraGasFees, metisGasFees, hecoGasFees, croGasFees, rethGasFees, atomGasFees, solGasFees, lunaGasFees])


  return (
    <div className="d-nut-chart">
      <Doughnut
        data={chartData}
        options={{
          cutoutPercentage: 70,
          resopnsive: true,
          hoverOffset: 4,
          legend: {
            // onHover: handleHover,
            // onLeave: handleLeave,
            position: 'left',
            align: 'start',
            labels: {
              fontColor: "grey",
              fontSize: 12,
              boxWidth: 30,
              padding: 3,
            }
          }
        }}
      />
    </div>
  );
}

export default DoughnutChart;