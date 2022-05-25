import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Menu from './src/screens/Menu';
import Database from './src/screens/Database';
import Login from './src/screens/Login';
import LoggedIn from './src/screens/LoggedIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Database" component={Database} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoggedIn" component={LoggedIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
