import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
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
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import MapView, { Marker } from 'react-native-maps';
import { useSharedValue } from 'react-native-reanimated';
import BottomSheet from '../src/BottomSheet';
import PicturesCarousel from '../src/PicturesCarousel';
import Overlay from '../src/Overlay';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

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

    const [markerData, setMarkerData] = useState([]);
    const [showBottomSheet, setShowBottomSheet] = useState(false);

    const makeMarkers = (data) => {
        if (markerData.length > 0) {
            const allMarkers = data.map((location) => {
                return (
                    <Marker
                        key={location.Title}
                        coordinate={{
                            latitude: location.Location.latitude,
                            longitude: location.Location.longitude,
                        }}
                        title={location.Title}
                        description={location.Description}
                        onPress={() => {
                            setShowBottomSheet(true);
                        }}
                    />
                );
            });
            return allMarkers;
        } else {
            return null;
        }
    };

    useEffect(() => {
        const db = Firebase.firestore();
        async function getData() {
            const collection = await db.collection('PointsOfInterest').get();
            let result = [];
            collection.forEach((doc) => {
                result.push(doc.data());
            });
            setMarkerData(result);
        }
        getData();
    }, []);

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
                onPress={() => {
                    setShowBottomSheet(false);
                }}
            >
                {makeMarkers(markerData)}
            </MapView>
            {showBottomSheet ? (
                <>
                    <Overlay panY={y} />
                    <PicturesCarousel panY={y} />
                    <BottomSheet panY={y} />
                </>
            ) : null}
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
