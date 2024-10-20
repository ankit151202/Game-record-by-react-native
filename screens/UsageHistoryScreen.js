import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { UsageContext } from '../contexts/UsageContext'; 

const UsageHistoryScreen = () => {
  const { usageData } = useContext(UsageContext);

  const data = {
    labels: Object.keys(usageData),
    datasets: [
      {
        data: Object.values(usageData).map((item) => (typeof item === 'object' ? item.limit : item)),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usage History</Text>
      <LineChart
        data={data}
        width={320} 
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#121212',
          backgroundGradientFrom: '#1F1F1F',
          backgroundGradientTo: '#1F1F1F',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 152, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    color: '#FF9800',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UsageHistoryScreen;
