import { Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 2,
        justifyContent: 'center',
        minHeight: 44,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    red: {
        backgroundColor: '#dc2626',
    },
    pressedRed: {
        backgroundColor: '#991B1B',
    },
    blue: {
        backgroundColor: '#1e3a8a',
    },
    pressedBlue: {
        backgroundColor: '#1d4ed8',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export const ASRedButton = ({ title = "Click Me", onPress = () => console.log('Button pressed!') }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                styles.red,
                pressed && styles.pressedRed
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export const ASBlueButton = ({ title = "Click Me", onPress = () => console.log('Button pressed!') }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                styles.blue,
                pressed && styles.pressedBlue
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};