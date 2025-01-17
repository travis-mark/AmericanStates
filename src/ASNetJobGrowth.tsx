import React from 'react'; 
import { ASPageView } from './ASPageView';
import { Text, View } from 'react-native';
import { ASTitleBanner } from './ASTitleBanner';
import { ASLogo } from './ASLogo';

const data = [
    { year: '14', value: 14, mean: 14 },
    { year: '15', value: 15, mean: 15 },
    { year: '16', value: 25, mean: 23 },
    { year: '17', value: 35, mean: 31 },
    { year: '18', value: 40, mean: 43 },
    { year: '19', value: -10, mean: -8 },
    { year: '20', value: -15, mean: -11 },
    { year: '21', value: 40, mean: 38 },
    { year: '22', value: 45, mean: 42 },
    { year: '23', value: 50, mean: 48 }
];

const box = {
    height: 200,
    lines: [100, 75, 50, 25, 0, -25, -50]
}

export const ASNetJobGrowth = () => {
    return (
        <ASPageView style={{ padding: 0, paddingBottom: 20, gap: 8, alignItems: 'center' }}>
            <ASTitleBanner text="Kansas" />
            <View style={{ padding: 12 }}>
                <Text>Number of Jobs Gained vs. Jobs Lost</Text>
            </View>
            <View style={{ width: '100%', height: box.height}}>
                <View style={{ position: 'absolute', zIndex: 1, height: box.height }}>
                    <Text style={{ transform: [{ translateX: -10 }, { translateY: 70 }, { rotate: '270deg' }] }}>Thousands</Text>
                </View>
                <View style={{ position: 'absolute', zIndex: 2, top: -85, width: '100%', height: box.height * 0.8 }}>
                    {box.lines.map((line, index) =>
                        <View key={line} style={{ position: 'absolute', left: 30, top: index * (box.height * 0.8 / box.lines.length), height: box.height, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Text style={{ width: 30, textAlign: 'right' }}>{line}</Text>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                        </View>
                    )}
                </View>
                <View style={{ position: 'absolute', zIndex: 3, width: '100%', height: box.height * 0.8 }}>
                    <View style={{ position: 'absolute', left: 75, top: 60, flexDirection: 'row', alignItems: 'flex-end', gap: 8 }}>
                        {data.map((data, index) =>
                            <View key={index} style={{ backgroundColor: data.value > 0 ? '#1e3a8a' : '#dc2626', width: 20, height: (data.value + 50) * 0.93 }}></View>
                        )}
                    </View>
                </View>
                <View style={{ position: 'absolute', zIndex: 4, width: '100%', height: box.height * 0.8 }}>
                    <View style={{ position: 'absolute', left: 75, top: 155, flexDirection: 'row', alignItems: 'flex-end', gap: 8 }}>
                        {data.map((data, index) =>
                            <Text key={index} style={{fontWeight: 'bold', textAlign: 'center', width: 20}}>{data.year}</Text>
                        )}
                    </View>
                </View>

            </View>
            <Text>Source: US Bureau of Labor Statistics</Text>
            <Text style={{ fontSize: 18 }}>State Rank #21</Text>
            <Text style={{ fontWeight: 'bold'}}>Top Performers:</Text>
            <Text>1. CA / 2. WA / 3. NC</Text>
            <View style={{flex: 1}} />
            <ASLogo height={64} />
        </ASPageView>
    );
};