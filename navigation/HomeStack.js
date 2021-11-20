import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SignOut from '../src/SignOut';


const Stack = createStackNavigator();

function CreateTourScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function AccountScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function SignOutButton({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeStack() {
  return (
  
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign:'center'}} >
        <Drawer.Screen name="GuideWalker" component={HomeScreen} />
        <Drawer.Screen name="Account" component={AccountScreen} />
        <Drawer.Screen name="Create Tour" component={CreateTourScreen} />
        <Drawer.Screen name="Log Out" component={SignOut} />
      </Drawer.Navigator>
       
 
  );
  
}

