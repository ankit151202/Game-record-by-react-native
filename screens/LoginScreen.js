// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPassword = await AsyncStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      Alert.alert('Login Successful');
      await AsyncStorage.setItem('userToken', 'loggedIn');
      navigation.replace('Home');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  // Optional: Store user data after signing up
  const handleSignUp = async () => {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password); // Only do this for demonstration
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#666"
        />
        <TouchableOpacity onPress={() => Alert.alert('Reset Password')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpLink} onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4f67d4', // Colorful background
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    backgroundColor: '#f0f4f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#4f67d4',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4f67d4',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signUpLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: '#333',
    fontSize: 16,
  },
});

export default LoginScreen;