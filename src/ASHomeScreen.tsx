import React from 'react';
import { Text, View } from 'react-native';
import { ASRedButton } from './ASButton';
import { ASPageView } from './ASPageView';
import { ASLogo } from './ASLogo';

export const ASHomeScreen = ({ navigation }) => {
  return (
        <ASPageView style={{justifyContent: 'space-between'}}>
          <ASLogo />

          <View style={{ gap: 8 }}>
              <ASRedButton title="State" />
              <ASRedButton title="Category" onPress={() => {
                  navigation.navigate("Categories")
              }} />
              <ASRedButton title="Measure" />
          </View>

          <Text style={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
              Talk is cheap, results are priceless
          </Text>
      </ASPageView>
  );
}



