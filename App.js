import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Receive from './src/Receive';
import Send from './src/Send';
import SendActive from './src/SendActive';
import Convert from './src/Convert';
import Graph from './src/Graph';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Receive" component={Receive} />
        <Stack.Screen options={{headerShown: false}} name="Send" component={Send} />
        <Stack.Screen options={{headerShown: false}} name="SendActive" component={SendActive} />
        <Stack.Screen options={{headerShown: false}} name="Convert" component={Convert} />
        <Stack.Screen options={{headerShown: false}} name="Graph" component={Graph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
