// ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const fetchUserData = async () => {
    const email = await AsyncStorage.getItem('email');
    const password = await AsyncStorage.getItem('password'); // Add other fields as needed

    if (email) setUserEmail(email);
    if (password) setUserPassword(password); // This is just for demonstration
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (

    <LinearGradient colors={['#E0E0E0', '#FFFFFF']} style={styles.container}>  
      <View style={styles.container}>
    <Text style={styles.title}>Profile Screen</Text>
    <Text style={styles.detail}>Email: {userEmail}</Text>
    <Text style={styles.detail}>Name:User</Text> 
  </View></LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 24,
    color: '#000',
  },
  detail: {
    fontSize: 18,
    color: 'blue',
  },
});

export default ProfileScreen;
