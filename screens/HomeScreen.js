import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    useWindowDimensions,
    SafeAreaView,
} from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import MapView, { Marker } from 'react-native-maps';
import { useSharedValue } from 'react-native-reanimated';
import BottomSheet from '../src/BottomSheet';
import PicturesCarousel from '../src/PicturesCarousel';
import Overlay from '../src/Overlay';

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
    const { width, height } = useWindowDimensions();
    const y = useSharedValue(0);
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 47.6205,
                    longitude: -122.3493,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0922,
                }}
                style={styles.map}
            ></MapView>
            <Overlay panY={y} />

            <PicturesCarousel panY={y} />

            <BottomSheet panY={y} />

            <SafeAreaView style={StyleSheet.absoluteFill} pointerEvents="none">
                {/* TODO: figure out how to get this to not block the map 
                <View style={styles.container}></View>
                */}
            </SafeAreaView>

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
        top: 40,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#A9A9A9',
    },
});
