import './charts.css';
import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';



const LineChart = (props) => {

    const [lineData, setLineData] = useState({});

    const [points, setPoints] = useState({});
    const [gasData, setGasData] = useState({});
    const [chainColor, setChainColor] = useState('#ffffff');

    useEffect(() => {
        setPoints(props.setPoint);
        setGasData(props.setGasData);
        setChainColor(props.setChainColor);
    
        return () => {
          // console.log("gas fee data recieved", props.setPoint);
        }
      })

    const DATA_COUNT = [(points)];
    // const DATA_POINTS = [(avaxGas)];
    const labels = [];
    for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
    }
    const datapoints = (gasData);
    for (let i = 0; i < datapoints; ++i) {
      datapoints.push(i.toString());
      }

    const data = () => {
        setLineData({
            type: 'line',
            labels: labels,
            datasets: [
                {
                label: 'transaction fee',
                data: datapoints,
                borderColor: (chainColor),
                backgroundColor: (chainColor),
                cubicInterpolationMode: 'monotone',
                tension: 0,
                fill: true,
                pointStyle: 'circle',
                pointRadius: 0,
                borderWidth: 1,
                }
            ]
        })
    }

    useEffect(() => {
        data()
    }, [points, gasData])
    
    // console.log("datapoints is ", datapoints);
    // console.log("points is ", labels);

    return (
        <div >
            <Line
            data={lineData}
            options= {{
                scales: {
                  xAxes: [{
                    display: false,
                  }],
                  yAxes: [{
                    display: false,
                  }]
                },
                legend: {
                  display: false,
                },
                responsive: true,
                tooltips:{
                  intersect: false,
                  enabled: true,
                  mode: 'nearest',
                  position: 'nearest',
                },
                interaction: {
                  intersect: false,
                },
              }}
              />
        </div>
    );
}

export default LineChart;
