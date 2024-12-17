import React from 'react';
import { ImageBackground, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function DashboardScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/images/Dashboard.jpg')} style={myStyles.dashboardContainer}>
      <TouchableOpacity
        style={myStyles.diseaseButton}
        onPress={() => navigation.navigate('Disease')}
      >
        <Text style={myStyles.diseaseText}>Disease</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={myStyles.overviewButton}
        onPress={() => navigation.navigate('Overview')}
      >
        <Text style={myStyles.overviewText}>Overview</Text>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View style={myStyles.bottomNav}>
        {/* Home Icon */}
        <TouchableOpacity
          style={myStyles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <FontAwesome name="home" size={24} color="black" />
          <Text style={myStyles.navText}>Home</Text>
        </TouchableOpacity>

        {/* Profile Icon */}
        <TouchableOpacity
          style={myStyles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <FontAwesome name="user" size={24} color="black" />
          <Text style={myStyles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const myStyles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diseaseButton: {
    backgroundColor: '#80C4E9',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  diseaseText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overviewButton: {
    backgroundColor: '#BFECFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  overviewText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'black',
  },
});

export default DashboardScreen;