import './charts.css';
import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { use } from 'chai';
import { defaults } from 'chart.js';



const LineChart = (props) => {

    const [lineData, setLineData] = useState({});

    const [points, setPoints] = useState({});

    useEffect(() => {
        setPoints(props.setPoint);
    
        return () => {
          console.log("gas fee data recieved", props.setPoint);
        }
      })

    const DATA_COUNT = [(points)];
    const labels = [];
    for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
    }
    const datapoints = [0, 20, 20, 60, 60, 120, 22, 180, 120, 125, 105, 110, 170];

    const data = () => {
        setLineData({
            type: 'line',
            labels: labels,
            datasets: [
                {
                label: 'Cubic interpolation (monotone)',
                data: datapoints,
                borderColor: '#582a2a',
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.4
                }, {
                label: 'Cubic interpolation',
                data: datapoints,
                borderColor: '#6f3832',
                fill: false,
                tension: 0.4
                }, {
                label: 'Linear interpolation (default)',
                data: datapoints,
                borderColor: '#864838',
                fill: false
                }
            ]
        })
    }

    useEffect(() => {
        data()
    }, [points])
    

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
