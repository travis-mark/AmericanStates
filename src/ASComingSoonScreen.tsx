import React from 'react';
import { Text } from 'react-native';
import { ASPageView } from './ASPageView';
import { ASLogo } from './ASLogo';

export const ASComingSoonScreen = () => {
  return (
        <ASPageView style={{justifyContent: 'center'}}>
          <ASLogo />

          <Text style={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
              Coming Soon!
          </Text>
      </ASPageView>
  );
}