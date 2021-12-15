import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button as RNButton } from 'react-native';

import { Button, InputField, ErrorMessage } from '../components';
import Firebase from '../config/firebase';

const auth = Firebase.auth();

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [signupError, setSignupError] = useState('');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    const onHandleSignup = async () => {
        try {
            if (email !== '' && password !== '') {
                await auth.createUserWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setSignupError(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="dark-content" />
            <Text style={styles.title}>GuideWalker</Text>
            <InputField
                inputStyle={{
                    fontSize: 14,
                }}
                containerStyle={{
                    backgroundColor: '#fff',
                    marginBottom: 20,
                    marginTop:20
                }}
                leftIcon="email"
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <InputField
                inputStyle={{
                    fontSize: 14,
                }}
                containerStyle={{
                    backgroundColor: '#fff',
                    marginBottom: 20,
                }}
                leftIcon="lock"
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                textContentType="password"
                rightIcon={rightIcon}
                value={password}
                onChangeText={(text) => setPassword(text)}
                handlePasswordVisibility={handlePasswordVisibility}
            />
            {signupError ? (
                <ErrorMessage error={signupError} visible={true} />
            ) : null}
            <Button
                onPress={onHandleSignup}
                backgroundColor="#173F5F"
                title="Create Account"
                tileColor="#fff"
                titleSize={18}
                containerStyle={{
                    marginBottom: 24,
                    marginTop: 10,
                }}
            />
           <Text style = {styles.login}
                onPress={() => navigation.navigate('Login')}
                title="Go to Login"
                color="#f57c00"
           >Already have an account? Sign In</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20639B',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
        paddingBottom: 24,
        marginTop: 50
    },
    login: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        
    },
});
