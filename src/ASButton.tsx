import { Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#dc2626',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    pressed: {
        backgroundColor: '#b91c1c', // darker red when pressed
        transform: [{ scale: 0.975 }], // slight scale down when pressed
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export const ASButton = ({ title = "Click Me", onPress = () => console.log('Button pressed!') }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed
            ]}
            onPress={() => console.log('Button pressed!')}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};