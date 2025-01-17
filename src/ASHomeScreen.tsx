import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { ASButton } from './ASButton';
import { ASPageView } from './ASPageView';

export const ASHomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
        <ASPageView style={{justifyContent: 'space-between'}}>
          {/* TODO: Get logo without text. */}
          <Image source={require('../img/american-states-logo.png')} style={{
              width: '100%',
              height: 128, // TODO: Image is 255px, add 1px to bottom
              resizeMode: 'contain'
          }} />

          <View style={{ gap: 8 }}>
              <ASButton title="State" />
              <ASButton title="Category" onPress={() => {
                  navigation.navigate("Categories")
              }} />
              <ASButton title="Measure" />
          </View>

          <Text style={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
              Talk is cheap, results are priceless
          </Text>
      </ASPageView>
  );
}



