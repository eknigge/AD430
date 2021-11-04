import React from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const IMAGES = [
  'https://firebasestorage.googleapis.com/v0/b/guidewalkertest.appspot.com/o/needle.JPG?alt=media&token=2e50f09e-69c4-4a24-8e33-b079b6a47761',
  'https://firebasestorage.googleapis.com/v0/b/guidewalkertest.appspot.com/o/garden.JPG?alt=media&token=b8fcd6ed-be63-41a8-b540-e332bbd5ad2f',
  'https://firebasestorage.googleapis.com/v0/b/guidewalkertest.appspot.com/o/climate_pledge.JPG?alt=media&token=ccccd364-9f9a-4b4a-8aa9-cbe083198245',
  'https://firebasestorage.googleapis.com/v0/b/guidewalkertest.appspot.com/o/science.JPG?alt=media&token=98f6d9e8-45f3-4516-9f6b-106eba320cb8',
];

export default function PicturesCarousel({ panY }) {
  const { height, width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            panY.value,
            [0, -(height * 0.6)],
            [0, -height],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.container, { top: height * 1 }, animatedStyle]}
    >
      {IMAGES.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image }}
          style={{ height: height * 0.4, width: width * 0.7 }}
          resizeMode="cover"
        />
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
});

