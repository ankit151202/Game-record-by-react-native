import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UsageContext = createContext();

export const UsageProvider = ({ children }) => {
  const [usageData, setUsageData] = useState([]); 
  useEffect(() => {
   
    const loadData = async () => {
      try {
        const storedUsage = await AsyncStorage.getItem('usageData');
        if (storedUsage) {
          setUsageData(JSON.parse(storedUsage));
        }
      } catch (error) {
        console.log('Error loading usage data:', error);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    
    const saveUsage = async () => {
      try {
        await AsyncStorage.setItem('usageData', JSON.stringify(usageData));
      } catch (error) {
        console.log('Error saving usage data:', error);
      }
    };
    saveUsage();
  }, [usageData]);


  const incrementUsage = (activity) => {
    setUsageData((prevData) => {
      const existingActivity = prevData.find(item => item.activity === activity);
      if (existingActivity) {
        // Update existing activity
        return prevData.map(item =>
          item.activity === activity
            ? { ...item, time: item.time + 1 } 
            : item
        );
      } else {
   
        return [...prevData, { activity, time: 1 }];
      }
    });
  };

  const setActivityLimit = (activity, limit) => {
    setUsageData((prevData) => {
      return prevData.map(item =>
        item.activity === activity
          ? { ...item, limit }
          : item
      );
    });
  };

  return (
    <UsageContext.Provider
      value={{
        usageData,
        incrementUsage,
        setActivityLimit, 
      }}
    >
      {children}
    </UsageContext.Provider>
  );
};
