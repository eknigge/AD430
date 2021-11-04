import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import MapView from 'react-native-maps';

const auth = Firebase.auth();

export default function HomeScreen() {
    const { user } = useContext(AuthenticatedUserContext);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
            <TouchableOpacity style={styles.overlay}>
                <StatusBar style="dark-content" />
                <View style={styles.row}>
                    <Text style={styles.title}>Welcome {user.email}!</Text>
                    <IconButton
                        name="logout"
                        size={24}
                        color="#fff"
                        onPress={handleSignOut}
                    />
                </View>
                <Text style={styles.text}>Your UID is: {user.uid} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
    },
    text: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    overlay: {
        position: 'absolute',
        bottom: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#A9A9A9',
    },
});
