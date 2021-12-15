import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { addMarker, getMarkers} from './api/MarkersApi';


class MarkerList extends Component {

    state = {
        markerList: [],
        currentMarkerDescription: null,
        currentMarkerLocation: null,
        currentMarkerTitle: null,
        currentMarkerImage: null,
    }

    onMarkerAdded = (marker) => {
        console.log('Marker Added');
        console.log(marker);
    }

    onMarkersReceived = (markerList) => {
        console.log(markerList);
        this.setState(prevState => ({
        markerList: prevState.markerList = markerList
    }));
    }

    componentDidMount(){
        getMarkers(this.onMarkersReceived);
    }

    render() {
        return (
            <SafeAreaView >
                <View style={StyleSheet.row}>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput
                    
                    placeholder="Add Description"
                    value={this.state.currentMarkerDescription}
                    onChangeText={(text) => this.setState(prevState => ({
                        currentMarkerDescription: prevState.currentMarkerDescription = text
                    }))
                } />
                <TextInput
                    
                    placeholder="Add Location"
                    value={this.state.currentMarkerLocation}
                    onChangeText={(text) => this.setState(prevState => ({
                        currentMarkerLocation: prevState.currentMarkerLocation = text
                    }))
                } />
                <TextInput
                    
                    placeholder="Add Title"
                    value={this.state.currentMarkerTitle}
                    onChangeText={(text) => this.setState(prevState => ({
                        currentMarkerTitle: prevState.currentMarkerTitle = text
                    }))
                } />
                <TextInput
                    
                    placeholder="Add Image"
                    value={this.state.currentMarkerImage}
                    onChangeText={(text) => this.setState(prevState => ({
                        currentMarkerImage: prevState.currentMarkerImage = text
                    }))
                } />
                
            <Button
            title="Submit"
            
            onPress={() => 
            addMarker(
                {
                    Description: this.state.currentMarkerDescription,
                    Location: this.state.currentMarkerLocation,
                    Title: this.state.currentMarkerTitle,
                    URL: this.state.currentMarkerImage,
                },
                this.onMarkerAdded
            )
            }/>
            </View>
            </SafeAreaView>
        )
    }

    }




    export default MarkerList;