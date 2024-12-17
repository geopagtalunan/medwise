import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; 
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import DashboardScreen from './DashboardScreen';
import OverviewScreen from './OverviewScreen'; 
import DiseaseScreen from './DiseaseScreen'; 
import DiseaseDetailScreen from './DiseaseDetailScreen'; 
import ProfileScreen from './ProfileScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Home' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: 'Login' }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTitle: 'Sign Up' }} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerTitle: 'Dashboard' }} />
                <Stack.Screen name="Overview" component={OverviewScreen} options={{ headerTitle: 'Overview' }} />
                <Stack.Screen name="Disease" component={DiseaseScreen} options={{ headerTitle: 'Diseases' }} />
                <Stack.Screen name="DiseaseDetail" component={DiseaseDetailScreen} options={{ headerTitle: 'Disease Details' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: 'Profile' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
