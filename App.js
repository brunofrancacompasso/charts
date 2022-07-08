import React from 'react';
import {View} from 'react-native';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from 'react-native-responsive-linechart';
// import { Container } from './styles';

const blank21 = () => {
  const data1 = [
    {x: -2, y: 1},
    {x: -1, y: 0},
    {x: 8, y: 13},
    {x: 9, y: 11.5},
    {x: 10, y: 12},
  ];

  const data2 = [
    {x: -2, y: 15},
    {x: -1, y: 10},
    {x: 0, y: 12},
    {x: 1, y: 7},
    {x: 8, y: 12},
    {x: 9, y: 13.5},
    {x: 10, y: 18},
  ];
  return (
    <View>
      <Chart
        style={{height: 200, width: 400}}
        padding={{left: 40, bottom: 20, right: 20, top: 20}}
        xDomain={{min: -2, max: 10}}
        yDomain={{min: 0, max: 20}}>
        <VerticalAxis
          tickCount={10}
          theme={{labels: {formatter: v => v.toFixed(2)}}}
        />
        <HorizontalAxis />
        <Area
          theme={{
            gradient: {
              from: {color: '#1abc9c', opacity: 0.4},
              to: {color: '#1abc9c', opacity: 0.4},
            },
          }}
          smoothing="cubic-spline"
          data={[
            {x: -2, y: 15},
            {x: -1, y: 10},
            {x: 0, y: 12},
            {x: 5, y: 8},
            {x: 6, y: 12},
            {x: 9, y: 13.5},
            {x: 10, y: 15},
          ]}
        />
        <Line
          onTooltipSelect={value => console.log(value)}
          smoothing={'bezier'}
          data={[
            {x: -2, y: 15},
            {x: -1, y: 10},
            {x: 0, y: 12},
            {x: 5, y: 8},
            {x: 6, y: 12},
            {x: 9, y: 13.5},
            {x: 10, y: 15},
          ]}
          theme={{stroke: {color: '#44bd32', width: 1}}}
        />
        <Area
          theme={{
            gradient: {
              from: {color: '#f39c12', opacity: 0.4},
              to: {color: '#f39c12', opacity: 0.4},
            },
          }}
          smoothing="cubic-spline"
          data={[
            {x: -2, y: 0},
            {x: -1, y: 2},
            {x: 0, y: 7},
            {x: 2, y: 5},
            {x: 3, y: 12},
            {x: 7, y: 16},
            {x: 9, y: 17},
            {x: 10, y: 12},
          ]}
        />
        <Line
          onTooltipSelect={value => console.log(value)}
          smoothing={'bezier'}
          data={[
            {x: -2, y: 0},
            {x: -1, y: 2},
            {x: 0, y: 7},
            {x: 2, y: 5},
            {x: 3, y: 12},
            {x: 7, y: 16},
            {x: 9, y: 17},
            {x: 10, y: 12},
          ]}
          theme={{stroke: {color: '#44bd32', width: 1}}}
        />
      </Chart>
    </View>
  );
};

export default blank21;
