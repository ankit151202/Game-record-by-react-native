import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import SetLimitsScreen from '../screens/SetLimitsScreen';
import ActivityScreen from '../screens/ActivityScreen';
import OnboardingScreen from '../screens/OnBoardingScreen';
import UsageHistoryScreen from '../screens/UsageHistoryScreen';
import TestIncrementScreen from '../contexts/Testincrementscreen';
import ProfileScreen from '../screens/ProfileScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!userToken);
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Set Limits" component={SetLimitsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TestIncrement" component={TestIncrementScreen}options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Activity" component={ActivityScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Usage History" component={UsageHistoryScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
