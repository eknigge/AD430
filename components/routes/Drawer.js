import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeTab } from './Tabs';
import { HeaderBackButton } from '@react-navigation/elements';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
const Drawer = createDrawerNavigator();
export const DefaultDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Group screenOptions={() => ({
        headerStyle: { backgroundColor: '#0176ae' },
        headerTintColor: 'black',
        headerTitleAlign: 'center'
      })} >
        <Drawer.Screen name="Guide Walker" component={HomeTab} />
        <Drawer.Screen name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                tintColor={'white'}
                onPress={() => navigation.goBack()}
              />
            )
          })} />
        <Drawer.Screen name="Login" component={LoginScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                tintColor={'white'}
                onPress={() => navigation.goBack()}
              />
            )
          })} />
           <Drawer.Screen name="Sign Up" component={SignupScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                tintColor={'white'}
                onPress={() => navigation.goBack()}
              />
            )
          })} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};