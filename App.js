import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions,SafeAreaView,} from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Overlay from './src/Overlay';
import BottomSheet from './src/BottomSheet';
import PicturesCarousel from './src/PicturesCarousel';


export default function App() {
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
              style={{ width, height }}
              >

            </MapView>
                

            <Overlay panY={y} />

            <PicturesCarousel panY={y} />

            <BottomSheet panY={y} />
            <SafeAreaView
            style={StyleSheet.absoluteFill}
            pointerEvents="none"
            >
            <View style={styles.container}>
            </View>
            </SafeAreaView>

            </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });