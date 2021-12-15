import * as React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './navigation';

export default function App() {
    return <Routes />;
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });