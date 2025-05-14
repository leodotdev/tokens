import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { ExpoRoot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const ctx = require.context('./app');
  
  return (
    <>
      <StatusBar style="auto" />
      <ExpoRoot context={ctx} />
    </>
  );
}