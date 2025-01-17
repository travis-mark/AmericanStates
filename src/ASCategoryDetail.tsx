import React, { useEffect } from 'react'; 
import { ASBlueButton } from './ASButton';
import { ASPageView } from './ASPageView';
import { ScrollView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ASCategoryData } from './ASCategories';

export const ASCategoryDetailScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({ title: name ?? "Category" })
    }, [])
    const route = useRoute()
    const { name } = route.params
    return (
        <ASPageView style={{ padding: 0, gap: 0 }}>
            <View style={{ backgroundColor: "rgb(255, 193, 0)", height: 44, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', fontSize: 18 }}>
                    Kansas
                </Text>
            </View>
            <ScrollView>
                <View style={{ padding: 20, gap: 8 }}>
                    {ASCategoryData.filter(category => category.parent == name).map(category => (
                        <ASBlueButton
                            key={category.name}
                            title={category.name}
                            onPress={() => navigation.push(category.screen ?? "ComingSoon", category)} />
                    ))}
                </View>
            </ScrollView>
        </ASPageView>
    );
};