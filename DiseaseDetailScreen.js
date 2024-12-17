import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

function DiseaseDetailScreen({ route }) {
  const { diseaseName } = route.params;

  const diseaseDetails = {
    'Heart Disease': {
      description: "Heart disease refers to any problem affecting the heart, such as coronary artery disease, arrhythmia, and heart failure.",
      symptoms: "Chest pain or discomfort, Shortness of breath, Dizziness or lightheadedness, Swelling in the legs or ankles, Unusual fatigue",
      treatment: "Medications, lifestyle changes, surgery.",
    },
    'Diabetes': {
      description: "Diabetes is a chronic condition that affects how your body regulates blood sugar (glucose). This occurs when your pancreas doesn't produce enough insulin, or your body can't effectively use the insulin it produces.",
      symptoms: "Increased thirst, frequent urination, fatigue, Blurred vision",
      treatment: 'Medications, insulin, dietary changes.',
    },
    'Lung Disease': {
      description: 'Lung disease refers to several types of diseases or disorders that prevent the lungs from functioning properly. Lung disease can affect respiratory function, or the ability to breathe, and pulmonary function, which is how well lungs work.',
      symptoms: 'Shortness of breath, wheezing, chronic cough.',
      treatment: 'Medications, oxygen therapy, surgery.',
    },
    'Cancer': {
      description: 'Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body. These contrast with benign tumors, which do not spread.',
      symptoms: 'Unexplained weight loss, fatigue, lumps.',
      treatment: 'Surgery, chemotherapy, radiation.',
    },
    'Chronic Kidney Disease': {
      description: 'Chronic kidney disease is a type of long-term kidney disease, in which either there is a gradual loss of kidney function which occurs over a period of months to years, or an abnormal kidney structure.',
      symptoms: 'Fatigue, swelling, difficulty breathing.',
      treatment: 'Dialysis, kidney transplant, medications.',
    },
    'Pneumonia': {
      description: 'Pneumonia is an inflammatory condition of the lung primarily affecting the small air sacs known as alveoli.',
      symptoms: 'Cough, fever, chest pain.',
      treatment: 'Antibiotics, antiviral medications, rest.',
    },
    'Stroke': {
      description: 'Stroke occurs when a blood vessel that carries oxygen and nutrients to the brain is either blocked by a clot or bursts (or ruptures).',
      symptoms: 'Sudden numbness, difficulty speaking, severe headache.',
      treatment: 'Medications, surgery, rehabilitation.',
    },
    'Asthma': {
      description: 'Asthma is a chronic lung disease that causes inflammation of the airways, making it difficult to breathe.',
      symptoms: 'Wheezing, shortness of breath, chest tightness.',
      treatment: 'Inhalers, medications, lifestyle changes.',
    },
    'Alzheimer Disease': {
      description: 'Alzheimer’s disease is the biological process that begins with the appearance of a buildup of proteins in the form of amyloid plaques and neurofibrillary tangles in the brain. This causes brain cells to die over time and the brain to shrink.',
      symptoms: 'Memory loss, confusion, difficulty completing tasks.',
      treatment: 'Medications, cognitive therapy, lifestyle changes.',
    },
    'Obesity': {
      description: "Obesity isn't just a cosmetic concern. It is a medical problem that increases the risk of heart disease, diabetes, and certain cancers.",
      symptoms: 'Excess weight, shortness of breath, fatigue.',
      treatment: 'Diet, exercise, behavioral therapy, medications.',
    },
  };

  const details = diseaseDetails[diseaseName] || {
    description: 'Details are not available for this disease.',
    symptoms: 'N/A',
    treatment: 'N/A',
  };

return (
    <ImageBackground source={require('./assets/images/med.jpg')} style={myStyles.container}>
      <View style={myStyles.diseaseDetailBox}>
        <Text style={myStyles.detailTitle}>{diseaseName}</Text>
        <Text style={myStyles.detailText}>
          <Text style={{ fontWeight: 'bold' }}>Description: </Text>
          {details.description}
        </Text>
        <Text style={myStyles.detailText}>
          <Text style={{ fontWeight: 'bold' }}>Symptoms: </Text>
          {details.symptoms}
        </Text>
        <Text style={myStyles.detailText}>
          <Text style={{ fontWeight: 'bold' }}> Treatment: </Text>
          {details.treatment}
        </Text>
      </View>
    </ImageBackground>
  );
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diseaseDetailBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DiseaseDetailScreen;