import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Dimensions, ScrollView, Image } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

const { height, width } = Dimensions.get('window'); // Get window dimensions

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomePage = ({ navigation }: RouterProps) => {

  const openPretest = () => {
    const url = 'https://ci-redcap.hs.uci.edu/surveys/?s=9MTR98DWKDCYA78W';
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={require('./controlfeature.png')} // Replace with your local image path
        style={styles.image} 
        resizeMode='contain'
      />
      <TouchableOpacity onPress={openPretest} style={styles.btn}>
        <Text style={styles.btnText}>Start here: Pretest</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Preeclampsia Discharge Instructions'); }} style={styles.btn}> 
          <Text style={styles.btnText}>Preenclampsia Education</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Support'); }} style={styles.btn}>
      <Text style={styles.btnText}>Support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6fbf1',
    paddingVertical: Platform.OS === 'web' ? 100 : 50, // Padding for scroll content
    paddingHorizontal: 20,
    width: '100%',
  },
  image: {
    width: width * 0.6, // 80% of the screen width
    height: height * 0.6, // 30% of the screen height
    marginBottom: Platform.OS === 'web' ? 50 : 30, // Margin below the image
  },
  btn: {
    width: "80%",
    backgroundColor: "#ff6347",
    borderRadius: 25,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  btnText: {
    fontSize: Platform.OS === 'web' ? 30 : 20, // Larger font size for web
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: Platform.OS === 'web' ? 40 : 20, // Larger text for web
    textAlign: 'center',
    color: 'black',
    marginBottom: Platform.OS === 'web' ? 50 : 50, // Adjust margins for web
    marginHorizontal: 5,
  },
});