import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ActivityScreen = () => {
  const activities = [
    { id: 1, name: 'Tommy', timeLimit: 'Unlimited' },
    { id: 2, name: 'Estelle', timeLimit: '2 hours/day' },
    { id: 3, name: 'Lucas', timeLimit: '3 hours/day' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time Limits for Family Members</Text>
      <View style={styles.activityList}>
        {activities.map((activity) => (
          <View key={activity.id} style={styles.activityCard}>
            <Text style={styles.activityName}>{activity.name}</Text>
            <Text style={styles.activityLimit}>Time Limit: {activity.timeLimit}</Text>
          </View>
        ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  activityList: {
    marginTop: 10,
  },
  activityCard: {
    backgroundColor: '#1F1F1F',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  activityName: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  activityLimit: {
    color: '#B0B0B0',
  },
});

export default ActivityScreen;
