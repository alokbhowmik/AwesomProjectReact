import 'react-native-gesture-handler'
import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './stacks/WelcomeScreen';
import MainScreen from './stacks/MainScreen';
import { Button } from 'react-native';

export default function App({ navigation }) {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerRight: () => (
              <Button title="click" onPress={
                () => {
                  alert("right button click ")// ? thisline work fine 
                  navigation.navigate('Main') // ! this line causes error
                }
              } />
            )
          }}
        />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


