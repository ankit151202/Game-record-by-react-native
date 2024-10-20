import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const cards = [
    { id: 1, name: 'Set Limits', icon: 'timer', screen: 'Set Limits' },
    { id: 2, name: 'Activity', icon: 'list', screen: 'Activity' },
    { id: 3, name: 'Usage History', icon: 'history', screen: 'Usage History' },
  ];

  // Function to handle press feedback by reducing opacity
  const handlePressIn = (cardAnimation) => {
    Animated.timing(cardAnimation, {
      toValue: 0.8,
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
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome to Parental Control App!</Text>
      <Text style={styles.instructionText}>
        Manage your child’s app usage effectively.
      </Text>

      {/* Option to revisit Onboarding */}
      <TouchableOpacity
        style={styles.onboardingButton}
        onPress={() => navigation.navigate('Onboarding')}
      >
        <Text style={styles.onboardingButtonText}>Take the Tour Again</Text>
      </TouchableOpacity>

      {/* Cards Section */}
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
              >
                <Icon name={card.icon} size={40} color="#FF9800" />
                <Text style={styles.cardText}>{card.name}</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  welcomeText: {
    color: '#FF9800',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  instructionText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  onboardingButton: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
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
    backgroundColor: '#1F1F1F',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
