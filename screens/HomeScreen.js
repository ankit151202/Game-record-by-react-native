import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import Homescreenimage from '../assets/game.png';
import UserProfileIcon from '../assets/profile.png'; // Import your user profile icon
import CustomHeader from './CustomHeader';

const HomeScreen = ({ navigation }) => {
  const cards = [
    { id: 1, name: 'Set Limits', icon: 'timer', screen: 'Set Limits' },
    { id: 2, name: 'Activity', icon: 'list', screen: 'Activity' },
    { id: 3, name: 'Usage History', icon: 'history', screen: 'Usage History' },
  ];

  const handlePressIn = (cardAnimation) => {
    Animated.timing(cardAnimation, {
      toValue: 0.9,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (cardAnimation) => {
    Animated.timing(cardAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient colors={['#E0E0E0', '#FFFFFF']} style={styles.container}>
      {/* Custom Header */}
      <CustomHeader title="Home" navigation={navigation} />

      <Image
        source={Homescreenimage}
        style={styles.headerImage}
      />

      <Text style={styles.welcomeText}>Welcome to Game Record Keeper!</Text>
      <Text style={styles.instructionText}>
        Manage your app usage effectively.
      </Text>

      <TouchableOpacity
        style={styles.onboardingButton}
        onPress={() => navigation.navigate('Onboarding')}
      >
        <Text style={styles.onboardingButtonText}>Take the Tour Again</Text>
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
        {cards.map((card) => {
          const cardAnimation = new Animated.Value(1); // Animation state for each card

          return (
            <Animated.View
              key={card.id}
              style={[styles.card, { transform: [{ scale: cardAnimation }] }]}
            >
              <TouchableOpacity
                onPressIn={() => handlePressIn(cardAnimation)}
                onPressOut={() => handlePressOut(cardAnimation)}
                onPress={() => navigation.navigate(card.screen)}
                style={styles.touchableCard}
              >
                <Icon name={card.icon} size={40} color="#FFCC00" />
                <Text style={styles.cardText}>{card.name}</Text>
                
              </TouchableOpacity>
            </Animated.View>
            
          );
        })}
        <Text style={styles.instructionText}>This app is in development mode. So some feature may not work</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  profileIcon: {
    width: 40, // Set the width of the profile icon
    height: 40, // Set the height of the profile icon
    borderRadius: 20, // Make it circular if it's a square image
  },
  headerImage: {
    width: '100%',
    height: 200, 
    borderRadius: 15,
    marginBottom: 20,
  },
  welcomeText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  instructionText: {
    color: '#900900',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  onboardingButton: {
    backgroundColor: '#3A6b45',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  onboardingButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#000000',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  touchableCard: {
    alignItems: 'center',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen;
