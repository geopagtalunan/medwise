
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/images/Home.jpg')} style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.logo} source={require('./assets/images/meddy.png')} />
        <Text style={styles.appName}>MedWise</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome!! Let's get started on your health journey!</Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BFECFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 100,
    marginRight: 10,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  welcomeText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
  },
  getStartedButton: {
    width: '50%',
    marginTop: 20,
    backgroundColor: '#80C4E9',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;