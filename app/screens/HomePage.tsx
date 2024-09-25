import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import React, { useEffect } from 'react';
import { FIREBASE_AUTH, FIREBASE_AN } from '../../FirebaseConfig';
import { logEvent } from 'firebase/analytics'; // Import the logEvent from Firebase Analytics
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const HomePage = ({navigation}: RouterProps) => {

    useEffect(() => {
        // Log the event when the user views the HomePage
        logEvent(FIREBASE_AN, 'home_screen_view', { screen_name: 'HomePage' });

        const startTime = Date.now();

        return () => {
            // Calculate how long the user spent on the page and log it
            const duration = (Date.now() - startTime) / 1000;
            logEvent(FIREBASE_AN, 'page_duration', {
                screen_name: 'HomePage',
                duration,
            });
        };
    }, []);

    const openPretest = () => {
        const url = 'https://www.google.com';
        logEvent(FIREBASE_AN, 'button_click', { button_name: 'Pretest' });
        Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
    };

    const openHospital = () => {
        const url = 'https://www.google.com';
        logEvent(FIREBASE_AN, 'button_click', { button_name: 'Hospital Post-test' });
        Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
    };

    const openOffice = () => {
        const url = 'https://www.google.com';
        logEvent(FIREBASE_AN, 'button_click', { button_name: 'Office Post-test' });
        Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={openPretest} style={styles.btn}>
                <Text style={styles.btnText}>
                    Start here: Pretest
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                logEvent(FIREBASE_AN, 'button_click', { button_name: 'Preenclampsia Education' });
                navigation.navigate('postpartuminstr');
            }} style={styles.btn}> 
                <Text style={styles.btnText}>
                    Preenclampsia Education 
                </Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={openHospital} style={styles.btn}>
                <Text style={styles.btnText}>
                    Hospital: Post-test
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openOffice} style={styles.btn}>
                <Text style={styles.btnText}>
                    Office: Post-test
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                logEvent(FIREBASE_AN, 'button_click', { button_name: 'Support' });
                navigation.navigate('support');
            }} style={styles.btn}> 
                <Text style={styles.btnText}>
                    Support
                </Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                logEvent(FIREBASE_AN, 'button_click', { button_name: 'Logout' });
                FIREBASE_AUTH.signOut();
            }} style={styles.btn}> 
                <Text style={styles.btnText}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
});
