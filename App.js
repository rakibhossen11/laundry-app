import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/StackNavigation';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
      <Provider store={store}>
        <StackNavigation />
        <StatusBar style='auto' />
      </Provider>
  );
}

