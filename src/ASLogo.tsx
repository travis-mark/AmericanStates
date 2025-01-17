import React from 'react';
import { Image } from 'react-native';

export const ASLogo = ({ height = 128 }) => {
    return <Image source={require('../img/american-states-logo.png')} style={{
        width: '100%',
        height: height, // TODO: Image is 255px, add 1px to bottom
        resizeMode: 'contain'
    }} />
}