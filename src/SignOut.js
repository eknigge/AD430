import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import Firebase from '../config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

const auth = Firebase.auth();
const bodyText = "Are you sure you want to log out?"

export default function SignOut(navigation) {
    const { user } = useContext(AuthenticatedUserContext);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    }; 
    return (
        <View>
            <View>
                <Text style={styles.logouttext}>
                    {bodyText}
                 </Text>
            </View>
       <View style={[{width: "50%", marginLeft: 100}]}>
                <Button
                    title="log out"
                    onPress={handleSignOut}
                     widht="50px">   
                </Button>
            </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
        logouttext: {
            fontSize: 20,
            marginTop: 200,
            marginBottom: 40,
            textAlign: "center",
        },
    
    })

