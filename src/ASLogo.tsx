import React from 'react';
import { Image } from 'react-native';

export const ASLogo = () => {
    return <Image source={require('../img/american-states-logo.png')} style={{
        width: '100%',
        height: 128, // TODO: Image is 255px, add 1px to bottom
        resizeMode: 'contain'
    }} />
}