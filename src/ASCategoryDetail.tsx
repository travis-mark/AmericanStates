import React, { useEffect } from 'react'; 
import { ASBlueButton } from './ASButton';
import { ASPageView } from './ASPageView';
import { ScrollView, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ASCategoryData } from './ASCategories';
import { ASTitleBanner } from './ASTitleBanner';

export const ASCategoryDetailScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({ title: name ?? "Category" })
    }, [])
    const route = useRoute()
    const { name } = route.params
    return (
        <ASPageView style={{ padding: 0, gap: 0 }}>
            <ASTitleBanner text='Kansas' />
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