import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import UserProfileIcon from '../assets/profile.png'; // Adjust the path as needed

const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={UserProfileIcon} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E0E0E0', // Adjust the background color if needed
    marginTop: -80, 
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});


export default CustomHeader;
