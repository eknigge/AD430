import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

export function TextToSpeech() {
  const speak = () => {
    const textToSay = 'Pike Place Market is a public market in Seattle, Washington, United States. It opened on August 17, 1907, and is one of the oldest continuously operated public farmers markets in the United States. Overlooking the Elliott Bay waterfront on Puget Sound, it serves as a place of business for many small farmers, craftspeople and merchants.';
    Speech.speak(textToSay);
  };

  return (
    <View style={styles.container}>
      <Button title="Start Tour" onPress={speak} />
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
      text: {
          fontSize: 20,
      },
});

export default TextToSpeech;
