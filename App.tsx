import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ASHomeScreen } from './src/ASHomeScreen';
import { ASCategories } from './src/ASCategories';

const Stack = createNativeStackNavigator();

// TODO: Get ok for nav bar

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ASHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Categories" component={ASCategories} options={{ title: "Measure Category"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
