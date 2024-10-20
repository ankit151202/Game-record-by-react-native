import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UsageContext } from '../contexts/UsageContext';

const SetLimitsScreen = () => {
  const { setActivityLimit, resetActivityLimit } = useContext(UsageContext);
  const navigation = useNavigation(); 
  const [activity, setActivity] = useState('');
  const [time, setTime] = useState('');

  const handleSetLimit = () => {
    if (!activity || !time) {
      Alert.alert('Error', 'Please enter both activity and time.');
      return;
    }
    const timeInt = parseInt(time);
    if (isNaN(timeInt) || timeInt <= 0) {
      Alert.alert('Error', 'Please enter a valid time in minutes.');
      return;
    }
    setActivityLimit(activity, timeInt);
    Alert.alert('Success', `Limit set for ${activity}: ${timeInt} minutes.`);
    setActivity('');
    setTime('');
  };

  const handleResetLimit = () => {
    if (!activity) {
      Alert.alert('Error', 'Please enter an activity to reset.');
      return;
    }
    resetActivityLimit(activity);
    Alert.alert('Success', `Limit reset for ${activity}.`);
    setActivity('');
    setTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Activity Limits</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Activity Name (e.g., Game)"
        placeholderTextColor="#aaa"
        value={activity}
        onChangeText={setActivity}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Time Limit (minutes)"
        placeholderTextColor="#aaa"
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
      />
      
      {/* Wrapping raw text inside <Text> component inside buttons */}
      <TouchableOpacity style={styles.button} onPress={handleSetLimit}>
        <Text style={styles.buttonText}>Set Limit</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.resetButton} onPress={handleResetLimit}>
        <Text style={styles.buttonText}>Reset Limit</Text>
      </TouchableOpacity>
      
      {/* Removed Taskbar component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',  // Black theme background
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',  // White text for title
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 20,
    borderColor: '#333',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  resetButton: {
    backgroundColor: '#ff3d00',  // Bright red button for reset
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SetLimitsScreen;
