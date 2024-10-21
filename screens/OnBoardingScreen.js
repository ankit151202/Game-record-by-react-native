import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import CustomHeader from './CustomHeader';
const slides = [
  { title: 'Welcome!', description: 'Manage your child\'s app usage easily.' },
  { title: 'Set Limits', description: 'You can set daily usage limits for different apps.' },
  { title: 'Track Usage', description: 'View detailed usage history to monitor activity.' },
];

const OnboardingScreen = ({ navigation }) => {
  return (
<LinearGradient colors={['#E0E0E0', '#FFFFFF']} style={styles.container}>
<CustomHeader title="Tour"  />
<Text style={styles.welcomeText}>Instructions!</Text>
    <ScrollView style={styles.container}>
      {slides.map((slide, index) => (
        <View key={index} style={styles.slide}>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
        </View>
      ))}
      <Button title="Get Started" onPress={() => navigation.replace('Home')} />
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 20,
    paddingTop:140,
  },
  slide: {
    marginBottom: 40,
  },
  title: {
    color: '#FF9800',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: '#000000',
    fontSize: 16,
  },
});

export default OnboardingScreen;
