import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ASHomeScreen } from './src/ASHomeScreen';
import { ASCategoriesScreen } from './src/ASCategories';
import { ASComingSoonScreen } from './src/ASComingSoonScreen';
import { ASCategoryDetailScreen } from './src/ASCategoryDetail';
import { ASNetJobGrowth } from './src/ASNetJobGrowth';

const Stack = createNativeStackNavigator();

// TODO: Get ok for nav bar

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ASHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Categories" component={ASCategoriesScreen} options={{ title: "Categories" }} />
        <Stack.Screen name="CategoryDetail" component={ASCategoryDetailScreen} />
        <Stack.Screen name="ComingSoon" component={ASComingSoonScreen} options={{ title: "Coming Soon!" }} />
        <Stack.Screen name="NetJobGrowth" component={ASNetJobGrowth} options={{ title: "Net Job Growth" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
