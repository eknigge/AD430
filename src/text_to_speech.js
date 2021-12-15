import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

export function TextToSpeech() {
  const speak = () => {
    const textToSay = "The Space Needle was built in the Seattle Center for the 1962 World's Fair, which drew over 2.3 million visitors. It was once the tallest structure west of the Mississippi River, standing at 605 feet. The tower is 138 feet wide, and weighs 9,550 short tons";
    Speech.speak(textToSay);
  };

  return (
    <View style={styles.container}>
      <Button title="Play Audio Tour" onPress={speak} />
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
