import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

export const UsageContext = createContext();

export const UsageProvider = ({ children }) => {
  const [activityLimits, setActivityLimits] = useState({});

  const setActivityLimit = (activity, limit) => {
    setActivityLimits((prevLimits) => ({
      ...prevLimits,
      [activity]: limit,
    }));
    scheduleNotification(activity, limit);
  };

  const resetActivityLimit = (activity) => {
    setActivityLimits((prevLimits) => {
      const newLimits = { ...prevLimits };
      delete newLimits[activity];
      return newLimits;
    });
  };

  const scheduleNotification = async (activity, limit) => {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Time Limit Reached',
        body: `You have reached your time limit for ${activity}!`,
      },
      trigger: {
        seconds: limit * 60, // Convert minutes to seconds
      },
    });
    Alert.alert(`Notification scheduled for ${activity}`);
  };

  return (
    <UsageContext.Provider value={{ activityLimits, setActivityLimit, resetActivityLimit }}>
      {children}
    </UsageContext.Provider>
  );
};
