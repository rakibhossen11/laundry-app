import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/StackNavigation';

export default function App() {
  return (
      // <View>
      //   <HomeScreen />
      // </View>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
  );
}

