import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View, ViewProps, ViewStyle } from 'react-native';

export const ASPageView: React.FC<ViewProps> = ({ children=[], style={} }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={{
            flex: 1,
            height: '100%',
        }}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View
                style={{
                    padding: 20,
                    gap: 8,
                    flex: 1,
                    height: '100%',
                    ...style as ViewStyle
                }}>
                {children}
            </View>
        </SafeAreaView>
    );
};