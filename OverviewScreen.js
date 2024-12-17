import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

function OverviewScreen() {
  return (
    <ImageBackground source={require('./assets/images/doctor.jpg')} style={myStyles.overviewContainer}>
      <Text style={myStyles.overviewInside}>
        MedWise is a comprehensive medical app that provides in-depth information on a wide array of diseases, from common
        illnesses to complex chronic conditions. Each entry offers a detailed overview, starting with a clear description
        of symptoms, allowing users to recognize potential health issues early. The app outlines the causes of these
        diseases, discussing risk factors and underlying mechanisms that contribute to their development.
      </Text>
    </ImageBackground>
  );
}

const myStyles = StyleSheet.create({
  overviewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overviewInside: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a background for better readability
    borderRadius: 10,
    padding: 15,
  },
});

export default OverviewScreen;