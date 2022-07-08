import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

export default class PieChartExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0,
      },
      labelWidth: 0,
    };
  }
  render() {
    const data = [
      50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
    ];

    const randomColor = () =>
      ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
        0,
        7,
      );
    const {labelWidth, selectedSlice} = this.state;
    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }));
    const deviceWidth = Dimensions.get('window').width;
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <PieChart style={{height: 200}} data={pieData}>
          <Text
            style={{
              position: 'absolute',
              left: deviceWidth / 2,
              textAlign: 'center',
            }}>
            teste
          </Text>
        </PieChart>
      </View>
    );
  }
}
