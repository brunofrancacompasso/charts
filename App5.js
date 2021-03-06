import PureChart from 'react-native-pure-chart';
import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

const blank21 = () => {
  let sampleData = [
    {
      seriesName: 'series1',
      data: [
        {x: '2018-02-01', y: 30},
        {x: '2018-02-02', y: 200},
        {x: '2018-02-03', y: 170},
        {x: '2018-02-04', y: 250},
        {x: '2018-02-05', y: 10},
      ],
      color: '#297AB1',
    },
    {
      seriesName: 'series2',
      data: [
        {x: '2018-02-01', y: 20},
        {x: '2018-02-02', y: 100},
        {x: '2018-02-03', y: 140},
        {x: '2018-02-04', y: 550},
        {x: '2018-02-05', y: 40},
      ],
      color: 'red',
    },
  ];
  return <PureChart data={sampleData} type="line" />;
};

export default blank21;
