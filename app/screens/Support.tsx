import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window'); // Get the window height

const Support = () => {
  const navigation = useNavigation(); // Access navigation object

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Custom back button at the top of the screen */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            This app was created as patient education for the Preeclampsia Educational 
            Project Study (PrEPS) - MHS 461-24
          </Text>
          <Text style={styles.text}>
            For concerns about this study, please contact Alice Sherman-Brown
           </Text>
           <Text style={styles.emailText} // Styling to make it look like a link
              onPress={() => Linking.openURL('mailto:aliceb@hs.uci.edu?')}>
            aliceb@hs.uci.edu 
          </Text>
          <Text style={styles.text}>
            For health concerns, please contact your doctor's office directly
          </Text>
          <Text style={styles.text}>
            Website designed and created by Floranne Ellington and the HERO Lab at UC Irvine
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
    backgroundColor: '#e6fbf1',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    minHeight: Platform.OS === 'web' ? height : undefined, // Full height for web
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: Platform.OS === 'web' ? 10 : 5,
  },
  text: {
    fontSize: Platform.OS === 'web' ? 30 : 20, // Larger text for web
    textAlign: 'center',
    color: 'black',
    marginTop: Platform.OS === 'web' ? 70 : 20, // Adjust margin for web
    marginHorizontal: 5,
  },
  emailText: {
    fontSize: Platform.OS === 'web' ? 30 : 20, // Larger link text for web
    textAlign: 'center',
    color: 'blue',
    marginHorizontal: 5,
    textDecorationLine: 'underline', // To resemble a link
  },
});