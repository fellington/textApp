import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Linking, Alert } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email + '@example.com', email.toLowerCase());
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = () => {
        const emailAddress = 'herolab@uci.edu';
        const subject = 'Account Creation Request';
        const body = 'Hello, I would like to create an account for the Preeclampsia Educational Project Study. Please provide further instructions.';

        // Open the email client with a pre-filled email to 'herolab@uci.edu'
        Linking.openURL(`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
            .catch((err) => {
                console.log('Error opening email client: ', err);
                Alert.alert(
                    'Error',
                    'Unable to open email client. Please manually email herolab@uci.edu to create an account.',
                    [{ text: 'OK' }]
                );
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Preeclampsia Educational Project Study
            </Text>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput value = {email}
                            style={styles.input} 
                            placeholder='Username' 
                            autoCapitalize='none'
                            onChangeText={(text) => setEmail(text)}>            
                </TextInput>
                { loading ? ( <ActivityIndicator size='large' color='#0000ff' />
                ) : (
                    <>
                        <Button title='Login' onPress={signIn}/>
                        <Button title='Sign Up' onPress={signUp}/>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    text: {
        fontSize:50,
        textAlign: 'center',
        color: 'black',
        marginHorizontal:5,
        marginBottom:70,
    }
});