import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { UsageContext } from '../contexts/UsageContext'; // Adjust the import path

const TestincrementScreen = () => {
  const { incrementUsage } = useContext(UsageContext);

  return (
    <View>
      <Button title="Increment Usage" onPress={() => incrementUsage('Example Activity')} />
    </View>
  );
};

export default TestincrementScreen;
