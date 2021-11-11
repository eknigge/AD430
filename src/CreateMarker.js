import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

  class CreateMarker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: []
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate
        }
      ]
    })
  }
  render() {
    return (
      <MapView 
        style={styles.container}
        initialRegion={{
          latitude: 47.6205,
          longitude: -122.3493,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
          }} 
          onLongPress={this.handlePress}
      >
      {this.state.markers.map((marker) => {
        return <Marker {...marker} />
      })}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateMarker;