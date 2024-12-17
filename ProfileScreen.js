import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

function ProfileScreen({ navigation }) {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = () => {
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <ImageBackground source={require("./assets/images/ProfileB.jpg")} style={styles.container}>
      <Text style={styles.titleText}>Profile</Text>
      <View style={styles.profileBox}>
        <Image style={styles.profileImage} source={require("./assets/images/pfp.jpg")} />
        <View style={styles.profileInfo}>
          <TextInput style={styles.inputField} placeholder="Username" />
          <TextInput style={styles.inputField} placeholder="Email account" />
        </View>
      </View>
      <View style={styles.feedbackSection}>
        <Text style={styles.feedbackLabel}>Feedback:</Text>
        <TextInput
          style={styles.feedbackInput}
          placeholder="Share your thoughts..."
          multiline
          value={feedback}
          onChangeText={setFeedback}
        />
      </View>
      <View style={styles.profileOptions}>
        <TouchableOpacity style={styles.submitButton} onPress={handleFeedbackSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, 
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  inputField: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  feedbackSection: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  feedbackLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  feedbackInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  profileOptions: {
    width: '100%',
    alignItems: 'center',
  },
  submitButton: {
    width: '80%',
    backgroundColor: '#78B3CE',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionButton: {
    width: '80%',
    backgroundColor: '#78B3CE',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '80%',
    backgroundColor: '#FF4C4C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;