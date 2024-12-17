import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity, ImageBackground, Text, View, Image, StyleSheet, Alert } from 'react-native';

function SignUpScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        if (!username || !email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        // Simulate a successful sign-up process
        Alert.alert('Success', 'Account created successfully!', [
            { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);

        // Clear input fields
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <ImageBackground source={require('./assets/images/med.jpg')} style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.logo} source={require('./assets/images/meddy.png')} />
                <Text style={styles.appName}>MedWise</Text>
            </View>
            <TextInput
                style={styles.input} 
                placeholder="Username"
                placeholderTextColor="gray"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={styles.signUpButtonContainer}
                onPress={handleSignUp}
            >
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginRedirectContainer}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.loginRedirectText}>Already have an account? Login</Text>
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
        fontFamily: 'serif',
        color: 'black',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        paddingLeft: 10,
    },
    signUpButtonContainer: {
        width: '80%',
        marginTop: 20,
        backgroundColor: '#80C4E9',
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginRedirectContainer: {
        marginTop: 15,
    },
    loginRedirectText: {
        color: 'blue',
        fontSize: 16,
    },
});

export default SignUpScreen;