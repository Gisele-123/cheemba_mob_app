import React, { useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View, Text } from 'react-native';
import moment from 'moment';

const screenWidth = Dimensions.get('window').width;

export const PowerUsageChart = () => {
  const labels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dataPoints = [5, 8, 12, 25, 20, 15, 2];

  const currentDayIndex = moment().day() - 1; 

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); 

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataPoints,
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#395C6A',
    backgroundGradientFrom: '#395C6A',
    backgroundGradientTo: '#395C6A',
    decimalPlaces: 2,
    color: (opacity = 0) => `rgba(255, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    gridLines: {
      drawOnChartBackground: true,
      drawBorder: false,
      color: 'rgba(255, 255, 255, 0.2)',
      lineWidth: 1,
    },
    ticks: {
      fontSize: 12,
      fontColor: '#ffffff',
    },
  };

 
  const getVerticalLineHeight = (index: number) => {
    const maxDataPoint = Math.max(...dataPoints);
    const dataPoint = dataPoints[index];
    return (dataPoint / maxDataPoint) * 220;
  };

  const getVerticalLinePosition = (dayIndex: number) => {
    return (screenWidth - 60) * (dayIndex / 6); 
  };

  return (
    <View style={{ padding: 10 }}>
      <LineChart
        data={data}
        width={screenWidth - 60}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
        onDataPointClick={({ index }) => setSelectedIndex(index)}
      />

      {/* Vertical Line */}
      <View
        style={{
          position: 'absolute',
          top: 94, 
          left: getVerticalLinePosition(currentDayIndex + 1),
          height: getVerticalLineHeight(currentDayIndex), 
          borderLeftWidth: 2,
          borderLeftColor: '#FF6347',
        }}
      />

      {selectedIndex !== null && (
        <View
          style={{
            position: 'absolute',
            top: 220 - getVerticalLineHeight(selectedIndex) - 40,
            left: (screenWidth - 60) * (selectedIndex / 6) - 40, 
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#fff'}}>
            {labels[selectedIndex]}: {dataPoints[selectedIndex]} kWh
          </Text>
        </View>
      )}
    </View>
  );
};
