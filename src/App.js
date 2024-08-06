import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNav from './navigation/stackNav';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  </>
  );
}

export default App;
