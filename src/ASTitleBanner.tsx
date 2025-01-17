import { Text, View } from "react-native";

export const ASTitleBanner = ({ text = "Kansas" }) => {
    return (
        <View style={{ backgroundColor: "rgb(255, 193, 0)", height: 44, justifyContent: 'center', width: "100%" }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', fontSize: 18 }}>
                {text}
            </Text>
        </View>
    );
};