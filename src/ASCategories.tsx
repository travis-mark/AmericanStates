import React, { useEffect } from 'react'; 
import { ASButton } from './ASButton';
import { ASPageView } from './ASPageView';
import { Image, Text, View } from 'react-native';

export const ASCategories = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({ title: "Kansas" })
    }, [])
    return (
        <ASPageView style={{ padding: 0, gap: 0 }}>
            <Image source={require('../img/kansas.capitol.jpg')} style={{
                width: '100%', 
                height: 180,  
                resizeMode: 'stretch'
            }} />
            <View style={{ backgroundColor: "rgb(255, 193, 0)", height: 44, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>MEASURE CATEGORY</Text>
            </View>
            <View style={{ padding: 20, gap: 8 }}>
                <ASButton title="Government Efficiency" />
                <ASButton title="Health" />
                <ASButton title="Prosperity" />
                <ASButton title="Environmental" />
                <ASButton title="Education" />
                <ASButton title="Public Safety" />
            </View>
            
        </ASPageView>
    );
};