import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map} 
            region={{
                latitude: 47.6205,
                longitude: -122.3493,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
              }}
              >
            <Marker coordinate = {{
                latitude: 47.6182759,
                longitude: -122.3481666}}
                pinColor = {"blue"}
                title={"Pacific Science Center"}
                description={"Rotating science exhibits plus laser light shows, a tropical butterfly house & IMAX movie theaters."}
                // image = {"https://firebasestorage.googleapis.com/v0/b/guidewalkertest.appspot.com/o/science.JPG?alt=media&token=98f6d9e8-45f3-4516-9f6b-106eba320cb8"}
                />
            </MapView>
        </View>
    );
}


const styles = StyleSheet.create({
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
});
