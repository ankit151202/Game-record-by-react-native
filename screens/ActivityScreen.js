import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CustomHeader from './CustomHeader';
import { LinearGradient } from 'expo-linear-gradient'; 
import * as Notifications from 'expo-notifications';

const ActivityScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    // Function to handle incoming notifications
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      const { title, body } = notification.request.content;
      const newNotification = { title, body, date: new Date().toISOString() };
      setNotifications(prev => [...prev, newNotification]);
    });

    // Clean up the subscription on unmount
    return () => subscription.remove();
  }, []);

  return (
    <LinearGradient colors={['#E0E0E0', '#FFFFFF']} style={styles.container}>
       <CustomHeader title="Activity" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.notificationsTitle}>Notifications</Text>
        <FlatList
          data={notifications}
          renderItem={({ item }) => (
            <View style={styles.notificationCard}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationBody}>{item.body}</Text>
              <Text style={styles.notificationDate}>{item.date}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
  },
  notificationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  notificationTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  notificationBody: {
    color: '#555',
  },
  notificationDate: {
    color: '#999',
    fontSize: 12,
  },
});

export default ActivityScreen;
