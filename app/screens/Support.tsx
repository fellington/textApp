import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Support = () => {
  const navigation = useNavigation(); // Access navigation object

  const handleEmailPress = () => {
    // Open the email link
    Linking.openURL('mailto:aliceb@hs.uci.edu?').catch((err) => console.error("Couldn't load email client", err));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Custom back button at the top of the screen */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            This app was created as patient education for the Preeclampsia Educational 
            Project Study (PrEPS) - MHS 461-24
          </Text>
          <Text style={styles.text}>
            For concerns about this study, please contact Alice Sherman-Brown
           </Text>
           <Text style={styles.emailText} // Styling to make it look like a link
              onPress={handleEmailPress}>
            aliceb@hs.uci.edu 
          </Text>
          <Text style={styles.text}>
            For health concerns, please contact your doctor's office directly
          </Text>
          <Text style={styles.text}>
            App designed and created by Floranne Ellington and the HERO Lab at UC Irvine
          </Text>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 40,
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 10,
  },
  text: {
    fontSize:30,
    textAlign: 'center',
    color: 'black',
    marginTop: 70,
    marginHorizontal:5,
  },
  emailText: {
    fontSize:30,
    textAlign: 'center',
    color: 'blue',
    marginHorizontal:5,
  }
});