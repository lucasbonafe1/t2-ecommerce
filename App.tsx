import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes/stack';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="blue"/>
      <Routes/>
    </NavigationContainer>
  );
}
