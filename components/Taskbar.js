import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Taskbar = ({ navigation }) => {
  return (
    <View style={styles.taskbar}>
      {/* Home Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.taskbarButton}>
        <Icon name="home" size={30} color="#fff" />
        <Text style={styles.taskbarText}>Home</Text>
      </TouchableOpacity>

      {/* Set Limits Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Set Limits')} style={styles.taskbarButton}>
        <Icon name="timer" size={30} color="#fff" />
        <Text style={styles.taskbarText}>Set Limits</Text>
      </TouchableOpacity>

      {/* Start Activity Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Activity')} style={styles.taskbarButton}>
        <Icon name="play-circle-outline" size={30} color="#fff" />
        <Text style={styles.taskbarText}>Start Activity</Text>
      </TouchableOpacity>

      {/* Usage History Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Usage History')} style={styles.taskbarButton}>
        <Icon name="history" size={30} color="#fff" />
        <Text style={styles.taskbarText}>Usage History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskbar: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222',
    width: '100%',
    paddingHorizontal: 10,
    borderTopColor: '#444',
    borderTopWidth: 1,
  },
  taskbarButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  taskbarText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Taskbar;
