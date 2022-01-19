import './charts.css';
import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';



const LineChart = (props) => {

    const [lineData, setLineData] = useState({});

    const [points, setPoints] = useState({});
    const [gasData, setGasData] = useState({});

    useEffect(() => {
        setPoints(props.setPoint);
        setGasData(props.setGasData);
    
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
                label: 'gas price feed',
                data: datapoints,
                borderColor: '#582a2a',
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.4
                }
                // {
                // label: 'coming',
                // data: datapoints,
                // borderColor: '#6f3832',
                // fill: false,
                // tension: 0.8
                // }, {
                // label: 'soon',
                // data: datapoints,
                // borderColor: '#864838',
                // fill: false
                // }
            ]
        })
    }

    useEffect(() => {
        data()
    }, [points])
    
    // console.log("datapoints is ", datapoints);
    // console.log("points is ", labels);

    return (
        <div >
            <Line
            data={lineData}
            options= {{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: 'Chart.js Line Chart - Cubic interpolation mode'
                  },
                },
                interaction: {
                  intersect: false,
                },
                scales: {
                  x: {
                    display: true,
                    title: {
                      display: true
                    }
                  },
                  y: {
                    display: true,
                    title: {
                      display: true,
                      text: 'Value'
                    },
                    suggestedMin: -10,
                    suggestedMax: 200
                  }
                }
              }}
              />
        </div>
    );
}

export default LineChart;


        //   '#582a2a',
        //   '#6f3832',
        //   '#864838',
        //   '#9b5a3e',
        //   '#b06d43',
        //   '#c28147',
        //   '#d3974b',
        //   '#e1ae51',
        //   '#ecc758',
        //   '#f5e061',
        //   '#fafa6e',
        //   '#aae479',
        //   '#64c987',
        //   '#23aa8f',
        //   '#00898a',
        //   '#176877',
        //   '#2a4858',
