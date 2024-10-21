import React, { useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { UsageProvider } from './contexts/UsageContext';
import * as Notifications from 'expo-notifications';

export default function App() {
  useEffect(() => {
    // Request permissions for notifications
    const requestNotificationsPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== 'granted') {
          console.log('Notification permission not granted');
        }
      }
    };

    requestNotificationsPermissions();

    // Handle incoming notifications
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
      // Handle notification (e.g., show an alert or update UI)
    });

    return () => subscription.remove(); // Cleanup the listener on unmount
  }, []);

  return (
    <UsageProvider>
      <AppNavigator />
    </UsageProvider>
  );
}
