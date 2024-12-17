import React, { useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

function DiseaseScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const diseases = [
    { 
        name: 'Heart Disease',
        image: require('./assets/images/Heart.jpg')
     },
    {
         name: 'Diabetes',
         image: require('./assets/images/diabetes.jpg')
     },
    { 
        name: 'Lung Disease',
        image: require('./assets/images/lungs.jpg') 
    },
    { 
        name: 'Cancer', 
        image: require('./assets/images/cancer.jpg') 
    },
    { 
        name: 'Chronic Kidney Disease', 
        image: require('./assets/images/kidneyy.jpg') 
    },
    { 
        name: 'Pneumonia', 
        image: require('./assets/images/pneu.jpg') 
    },
    { 
        name: 'Stroke',
        image: require('./assets/images/stokeee.jpg')
    },
    { 
        name: 'Asthma', 
        image: require('./assets/images/Asthma.jpg') 
    },
    { 
        name: 'Alzheimer Disease', 
        image: require('./assets/images/alzhai.jpg') 
    },
    { 
        name: 'Obesity', 
        image: require('./assets/images/obe.jpg') 
    },
  ];

  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={myStyles.searchContainer}>
      <TextInput
        style={myStyles.searchBar}
        placeholder="Search Diseases..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Text style={myStyles.sectionTitle}>Discover Diseases</Text>
      <View style={myStyles.gridContainer}>
        {filteredDiseases.map((disease, index) => (
          <TouchableOpacity
            key={index}
            style={myStyles.button}
            onPress={() => navigation.navigate('DiseaseDetail', { diseaseName: disease.name })}
          >
            <Image style={myStyles.image} source={disease.image} />
            <Text style={myStyles.description}>{disease.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const myStyles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%', 
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  description: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DiseaseScreen;