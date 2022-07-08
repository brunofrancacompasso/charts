import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

class PieChartWithDynamicSlices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: '',
      },
      labelWidth: 0,
    };
  }
  render() {
    const {labelWidth, selectedSlice} = this.state;
    const {label, value} = selectedSlice;
    const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
    const values = [15, 25, 35, 45, 55];
    const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff'];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: {fill: colors[index]},
        onPress: () =>
          this.setState({selectedSlice: {label: key, value: values[index]}}),
      };
    });
    const deviceWidth = Dimensions.get('window').width;

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View
          style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
          <PieChart
            style={{height: 200}}
            outerRadius={'100%'}
            innerRadius={'85%'}
            data={data}
          />
          <Text
            onLayout={({
              nativeEvent: {
                layout: {width},
              },
            }) => {
              this.setState({labelWidth: width});
            }}
            style={{
              position: 'absolute',

              left: deviceWidth / 2 - labelWidth / 2,
              textAlign: 'center',
            }}>
            {`${label} \n ${value}`}
          </Text>
        </View>
      </View>
    );
  }
}

export default PieChartWithDynamicSlices;
