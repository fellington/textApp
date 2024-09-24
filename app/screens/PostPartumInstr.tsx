import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface DataItem {
  key: string;
  text: string;
}

const list1: DataItem[] = [
  { key: '1', text: 'Please check your blood pressure at home, two times a day.' },
  { key: '2', text: 'The goal blood pressure is less than 140/90. If your blood pressure is higher than this on multiple measurements, please call your doctor, you may need to start or increase medication.' },
];

const list2 = [
  { key: 'Pain on the right side of your belly button' },
  { key: 'Difficulty breathing' },
  { key: 'Headache or vision changes' },
  { key: 'Blood pressure more than 160/105' },
];

export default function PostPartumInstr() {
  const navigation = useNavigation(); // Access navigation object

  const renderItem = ({ item }: { item: DataItem }) => {
    // Split the sentence where you want to bold "140/90"
    const parts = item.text.split('140/90');

    return (
      <View style={styles.bulletContainer}>
        <Text style={styles.bulletPoint}>{'\u2022'}</Text>
        <Text style={styles.bulletText}>
          {parts[0]}
          {parts.length > 1 && <Text style={styles.boldText}>140/90</Text>}
          {parts[1]}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Custom back button at the top of the screen */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText}>Preeclampsia Discharge Instructions</Text>
          
          <Text style={styles.bodyText}>
            You were diagnosed with a condition called preeclampsia (pre-e-clamp-sia). This is a serious disease that can occur during pregnancy or after delivery. The only treatment for preeclampsia is delivery. You may need medications to lower your risk of seizures and treat high blood pressure. Preeclampsia is more than just high blood pressure. It can also cause seizures, strokes, fluid on the lungs, and harm to the kidneys and liver.
          </Text>
          <Text style={styles.bodyText}>
            Just like it takes time to recover from delivery, it takes the body time to recover from preeclampsia. Sometimes, this means you need to take blood pressure medicine for a few weeks to keep your blood pressure in a safe range.
          </Text>

          <FlatList
            data={list1}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />

          <Text style={styles.bodyText}>
            If you are feeling any of the following symptoms, please contact your doctor right away or go to the hospital. If you are in an emergency room, please tell the doctor you have preeclampsia.
          </Text>

          {list2.map((item, index) => (
            <View key={index} style={styles.bulletContainer}>
              <Text style={styles.bulletPoint}>{'\u2022'}</Text>
              <Text style={styles.bulletText}>{item.key}</Text>
            </View>
          ))}

          <Text style={styles.bodyTextLast}>
            Having preeclampsia increases your risk of future health complications, including high blood pressure, heart attack, stroke, and kidney disease. You can lower these risks by maintaining a healthy lifestyle with a good diet and exercise. You should see your OBGYN within 1 week after leaving the hospital. Also, see a primary care doctor within 6 months of delivery, and every year thereafter. In your next pregnancy, taking a baby aspirin (81mg) can lower your risk of preeclampsia again.
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 50,
  },
  subHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 5,
    marginTop: 25,
  },
  bodyTextLast: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 5,
    marginTop: 25,
    marginBottom: 50,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
    marginLeft: 15,
    flexWrap: 'wrap',
  },
  bulletPoint: {
    fontSize: 20,
    color: 'black',
    marginRight: 5,
  },
  bulletText: {
    fontSize: 20,
    color: 'black',
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 10,
  },
});
