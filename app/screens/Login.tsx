import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email + '@example.com', email);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email + '@example.com', email);
            console.log(response);
            alert('Sign up successful!');
        } catch (error: any) {
            console.log(error);
            alert('Registration failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

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
        fontSize:30,
        textAlign: 'center',
        color: 'black',
        marginTop: 70,
        marginHorizontal:5,
    }
});